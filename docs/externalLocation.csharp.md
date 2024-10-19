# `externalLocation` Submodule <a name="`externalLocation` Submodule" id="@cdktf/provider-databricks.externalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalLocation <a name="ExternalLocation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location databricks_external_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ExternalLocation(Construct Scope, string Id, ExternalLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig">ExternalLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig">ExternalLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails">PutEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetAccessPoint">ResetAccessPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEncryptionDetails">ResetEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceUpdate">ResetForceUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetIsolationMode">ResetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation">ResetSkipValidation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionDetails` <a name="PutEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails"></a>

```csharp
private void PutEncryptionDetails(ExternalLocationEncryptionDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.putEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---

##### `ResetAccessPoint` <a name="ResetAccessPoint" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetAccessPoint"></a>

```csharp
private void ResetAccessPoint()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetEncryptionDetails` <a name="ResetEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetEncryptionDetails"></a>

```csharp
private void ResetEncryptionDetails()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceDestroy"></a>

```csharp
private void ResetForceDestroy()
```

##### `ResetForceUpdate` <a name="ResetForceUpdate" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetForceUpdate"></a>

```csharp
private void ResetForceUpdate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsolationMode` <a name="ResetIsolationMode" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetIsolationMode"></a>

```csharp
private void ResetIsolationMode()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetSkipValidation` <a name="ResetSkipValidation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.resetSkipValidation"></a>

```csharp
private void ResetSkipValidation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

ExternalLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

ExternalLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

ExternalLocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

ExternalLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ExternalLocation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExternalLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExternalLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ExternalLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetails">EncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.accessPointInput">AccessPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput">CredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetailsInput">EncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdateInput">ForceUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationModeInput">IsolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnlyInput">ReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput">SkipValidationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.accessPoint">AccessPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdate">ForceUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationMode">IsolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnly">ReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation">SkipValidation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EncryptionDetails`<sup>Required</sup> <a name="EncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetails"></a>

```csharp
public ExternalLocationEncryptionDetailsOutputReference EncryptionDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsOutputReference</a>

---

##### `AccessPointInput`<sup>Optional</sup> <a name="AccessPointInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.accessPointInput"></a>

```csharp
public string AccessPointInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialNameInput"></a>

```csharp
public string CredentialNameInput { get; }
```

- *Type:* string

---

##### `EncryptionDetailsInput`<sup>Optional</sup> <a name="EncryptionDetailsInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.encryptionDetailsInput"></a>

```csharp
public ExternalLocationEncryptionDetails EncryptionDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroyInput"></a>

```csharp
public object ForceDestroyInput { get; }
```

- *Type:* object

---

##### `ForceUpdateInput`<sup>Optional</sup> <a name="ForceUpdateInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdateInput"></a>

```csharp
public object ForceUpdateInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsolationModeInput`<sup>Optional</sup> <a name="IsolationModeInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationModeInput"></a>

```csharp
public string IsolationModeInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnlyInput"></a>

```csharp
public object ReadOnlyInput { get; }
```

- *Type:* object

---

##### `SkipValidationInput`<sup>Optional</sup> <a name="SkipValidationInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidationInput"></a>

```csharp
public object SkipValidationInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AccessPoint`<sup>Required</sup> <a name="AccessPoint" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.accessPoint"></a>

```csharp
public string AccessPoint { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; }
```

- *Type:* object

---

##### `ForceUpdate`<sup>Required</sup> <a name="ForceUpdate" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.forceUpdate"></a>

```csharp
public object ForceUpdate { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsolationMode`<sup>Required</sup> <a name="IsolationMode" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.isolationMode"></a>

```csharp
public string IsolationMode { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.readOnly"></a>

```csharp
public object ReadOnly { get; }
```

- *Type:* object

---

##### `SkipValidation`<sup>Required</sup> <a name="SkipValidation" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.skipValidation"></a>

```csharp
public object SkipValidation { get; }
```

- *Type:* object

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.externalLocation.ExternalLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalLocationConfig <a name="ExternalLocationConfig" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ExternalLocationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CredentialName,
    string Name,
    string Url,
    string AccessPoint = null,
    string Comment = null,
    ExternalLocationEncryptionDetails EncryptionDetails = null,
    object ForceDestroy = null,
    object ForceUpdate = null,
    string Id = null,
    string IsolationMode = null,
    string MetastoreId = null,
    string Owner = null,
    object ReadOnly = null,
    object SkipValidation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName">CredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#name ExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#url ExternalLocation#url}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.accessPoint">AccessPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#access_point ExternalLocation#access_point}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#comment ExternalLocation#comment}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.encryptionDetails">EncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceDestroy">ForceDestroy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceUpdate">ForceUpdate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#force_update ExternalLocation#force_update}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#id ExternalLocation#id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.isolationMode">IsolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#owner ExternalLocation#owner}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.readOnly">ReadOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#read_only ExternalLocation#read_only}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation">SkipValidation</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.credentialName"></a>

```csharp
public string CredentialName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#credential_name ExternalLocation#credential_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#name ExternalLocation#name}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#url ExternalLocation#url}.

---

##### `AccessPoint`<sup>Optional</sup> <a name="AccessPoint" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.accessPoint"></a>

```csharp
public string AccessPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#access_point ExternalLocation#access_point}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#comment ExternalLocation#comment}.

---

##### `EncryptionDetails`<sup>Optional</sup> <a name="EncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.encryptionDetails"></a>

```csharp
public ExternalLocationEncryptionDetails EncryptionDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#encryption_details ExternalLocation#encryption_details}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceDestroy"></a>

```csharp
public object ForceDestroy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#force_destroy ExternalLocation#force_destroy}.

---

##### `ForceUpdate`<sup>Optional</sup> <a name="ForceUpdate" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.forceUpdate"></a>

```csharp
public object ForceUpdate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#force_update ExternalLocation#force_update}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#id ExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsolationMode`<sup>Optional</sup> <a name="IsolationMode" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.isolationMode"></a>

```csharp
public string IsolationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#isolation_mode ExternalLocation#isolation_mode}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#metastore_id ExternalLocation#metastore_id}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#owner ExternalLocation#owner}.

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.readOnly"></a>

```csharp
public object ReadOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#read_only ExternalLocation#read_only}.

---

##### `SkipValidation`<sup>Optional</sup> <a name="SkipValidation" id="@cdktf/provider-databricks.externalLocation.ExternalLocationConfig.property.skipValidation"></a>

```csharp
public object SkipValidation { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#skip_validation ExternalLocation#skip_validation}.

---

### ExternalLocationEncryptionDetails <a name="ExternalLocationEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ExternalLocationEncryptionDetails {
    ExternalLocationEncryptionDetailsSseEncryptionDetails SseEncryptionDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.property.sseEncryptionDetails">SseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `SseEncryptionDetails`<sup>Optional</sup> <a name="SseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails.property.sseEncryptionDetails"></a>

```csharp
public ExternalLocationEncryptionDetailsSseEncryptionDetails SseEncryptionDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#sse_encryption_details ExternalLocation#sse_encryption_details}

---

### ExternalLocationEncryptionDetailsSseEncryptionDetails <a name="ExternalLocationEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ExternalLocationEncryptionDetailsSseEncryptionDetails {
    string Algorithm = null,
    string AwsKmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.algorithm">Algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#algorithm ExternalLocation#algorithm}.

---

##### `AwsKmsKeyArn`<sup>Optional</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```csharp
public string AwsKmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.54.0/docs/resources/external_location#aws_kms_key_arn ExternalLocation#aws_kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalLocationEncryptionDetailsOutputReference <a name="ExternalLocationEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ExternalLocationEncryptionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails">PutSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resetSseEncryptionDetails">ResetSseEncryptionDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSseEncryptionDetails` <a name="PutSseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```csharp
private void PutSseEncryptionDetails(ExternalLocationEncryptionDetailsSseEncryptionDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---

##### `ResetSseEncryptionDetails` <a name="ResetSseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```csharp
private void ResetSseEncryptionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetails">SseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">SseEncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SseEncryptionDetails`<sup>Required</sup> <a name="SseEncryptionDetails" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```csharp
public ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference SseEncryptionDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference">ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `SseEncryptionDetailsInput`<sup>Optional</sup> <a name="SseEncryptionDetailsInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```csharp
public ExternalLocationEncryptionDetailsSseEncryptionDetails SseEncryptionDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsOutputReference.property.internalValue"></a>

```csharp
public ExternalLocationEncryptionDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetails">ExternalLocationEncryptionDetails</a>

---


### ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference <a name="ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">ResetAwsKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetAwsKmsKeyArn` <a name="ResetAwsKmsKeyArn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```csharp
private void ResetAwsKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">AwsKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `AwsKmsKeyArnInput`<sup>Optional</sup> <a name="AwsKmsKeyArnInput" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```csharp
public string AwsKmsKeyArnInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `AwsKmsKeyArn`<sup>Required</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```csharp
public string AwsKmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```csharp
public ExternalLocationEncryptionDetailsSseEncryptionDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.externalLocation.ExternalLocationEncryptionDetailsSseEncryptionDetails">ExternalLocationEncryptionDetailsSseEncryptionDetails</a>

---



