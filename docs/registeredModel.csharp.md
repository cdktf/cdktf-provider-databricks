# `registeredModel` Submodule <a name="`registeredModel` Submodule" id="@cdktf/provider-databricks.registeredModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegisteredModel <a name="RegisteredModel" id="@cdktf/provider-databricks.registeredModel.RegisteredModel"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model databricks_registered_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RegisteredModel(Construct Scope, string Id, RegisteredModelConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig">RegisteredModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig">RegisteredModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.putAliases">PutAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAliases` <a name="PutAliases" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.putAliases"></a>

```csharp
private void PutAliases(IResolvable|RegisteredModelAliases[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.putAliases.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]

---

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetAliases"></a>

```csharp
private void ResetAliases()
```

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetBrowseOnly"></a>

```csharp
private void ResetBrowseOnly()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetStorageLocation"></a>

```csharp
private void ResetStorageLocation()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RegisteredModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

RegisteredModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

RegisteredModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

RegisteredModel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

RegisteredModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RegisteredModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RegisteredModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RegisteredModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RegisteredModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.aliases">Aliases</a></code> | <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList">RegisteredModelAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.aliasesInput">AliasesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.storageLocationInput">StorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.browseOnly">BrowseOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.storageLocation">StorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.aliases"></a>

```csharp
public RegisteredModelAliasesList Aliases { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList">RegisteredModelAliasesList</a>

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.aliasesInput"></a>

```csharp
public IResolvable|RegisteredModelAliases[] AliasesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.browseOnlyInput"></a>

```csharp
public bool|IResolvable BrowseOnlyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.storageLocationInput"></a>

```csharp
public string StorageLocationInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.browseOnly"></a>

```csharp
public bool|IResolvable BrowseOnly { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.storageLocation"></a>

```csharp
public string StorageLocation { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.registeredModel.RegisteredModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RegisteredModelAliases <a name="RegisteredModelAliases" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RegisteredModelAliases {
    string AliasName = null,
    string CatalogName = null,
    string Id = null,
    string ModelName = null,
    string SchemaName = null,
    double VersionNum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.aliasName">AliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#alias_name RegisteredModel#alias_name}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#id RegisteredModel#id}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.modelName">ModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#model_name RegisteredModel#model_name}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.versionNum">VersionNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#version_num RegisteredModel#version_num}. |

---

##### `AliasName`<sup>Optional</sup> <a name="AliasName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.aliasName"></a>

```csharp
public string AliasName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#alias_name RegisteredModel#alias_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#id RegisteredModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#model_name RegisteredModel#model_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}.

---

##### `VersionNum`<sup>Optional</sup> <a name="VersionNum" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliases.property.versionNum"></a>

```csharp
public double VersionNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#version_num RegisteredModel#version_num}.

---

### RegisteredModelConfig <a name="RegisteredModelConfig" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RegisteredModelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|RegisteredModelAliases[] Aliases = null,
    bool|IResolvable BrowseOnly = null,
    string CatalogName = null,
    string Comment = null,
    double CreatedAt = null,
    string CreatedBy = null,
    string FullName = null,
    string Id = null,
    string MetastoreId = null,
    string Name = null,
    string Owner = null,
    string SchemaName = null,
    string StorageLocation = null,
    double UpdatedAt = null,
    string UpdatedBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.aliases">Aliases</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]</code> | aliases block. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.browseOnly">BrowseOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#browse_only RegisteredModel#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#comment RegisteredModel#comment}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#created_at RegisteredModel#created_at}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#created_by RegisteredModel#created_by}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#full_name RegisteredModel#full_name}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#id RegisteredModel#id}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#metastore_id RegisteredModel#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#name RegisteredModel#name}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#owner RegisteredModel#owner}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.storageLocation">StorageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#storage_location RegisteredModel#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#updated_at RegisteredModel#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#updated_by RegisteredModel#updated_by}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.aliases"></a>

```csharp
public IResolvable|RegisteredModelAliases[] Aliases { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]

aliases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#aliases RegisteredModel#aliases}

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.browseOnly"></a>

```csharp
public bool|IResolvable BrowseOnly { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#browse_only RegisteredModel#browse_only}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#catalog_name RegisteredModel#catalog_name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#comment RegisteredModel#comment}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#created_at RegisteredModel#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#created_by RegisteredModel#created_by}.

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#full_name RegisteredModel#full_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#id RegisteredModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#metastore_id RegisteredModel#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#name RegisteredModel#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#owner RegisteredModel#owner}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#schema_name RegisteredModel#schema_name}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.storageLocation"></a>

```csharp
public string StorageLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#storage_location RegisteredModel#storage_location}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#updated_at RegisteredModel#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.registeredModel.RegisteredModelConfig.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/registered_model#updated_by RegisteredModel#updated_by}.

---

## Classes <a name="Classes" id="Classes"></a>

### RegisteredModelAliasesList <a name="RegisteredModelAliasesList" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RegisteredModelAliasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.get"></a>

```csharp
private RegisteredModelAliasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesList.property.internalValue"></a>

```csharp
public IResolvable|RegisteredModelAliases[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>[]

---


### RegisteredModelAliasesOutputReference <a name="RegisteredModelAliasesOutputReference" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RegisteredModelAliasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetAliasName">ResetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetVersionNum">ResetVersionNum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAliasName` <a name="ResetAliasName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetAliasName"></a>

```csharp
private void ResetAliasName()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetModelName"></a>

```csharp
private void ResetModelName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetVersionNum` <a name="ResetVersionNum" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.resetVersionNum"></a>

```csharp
private void ResetVersionNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasNameInput">AliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNumInput">VersionNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasName">AliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNum">VersionNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasNameInput"></a>

```csharp
public string AliasNameInput { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `VersionNumInput`<sup>Optional</sup> <a name="VersionNumInput" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNumInput"></a>

```csharp
public double VersionNumInput { get; }
```

- *Type:* double

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.aliasName"></a>

```csharp
public string AliasName { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `VersionNum`<sup>Required</sup> <a name="VersionNum" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.versionNum"></a>

```csharp
public double VersionNum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.registeredModel.RegisteredModelAliasesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RegisteredModelAliases InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.registeredModel.RegisteredModelAliases">RegisteredModelAliases</a>

---



