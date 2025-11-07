# `grants` Submodule <a name="`grants` Submodule" id="@cdktf/provider-databricks.grants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Grants <a name="Grants" id="@cdktf/provider-databricks.grants.Grants"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants databricks_grants}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.grants.Grants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new Grants(Construct Scope, string Id, GrantsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig">GrantsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.grants.Grants.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grants.Grants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.grants.Grants.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.grants.GrantsConfig">GrantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.putGrant">PutGrant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetCredential">ResetCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetExternalLocation">ResetExternalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetForeignConnection">ResetForeignConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetMetastore">ResetMetastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetShare">ResetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetStorageCredential">ResetStorageCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.grants.Grants.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.grants.Grants.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.grants.Grants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.grants.Grants.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.grants.Grants.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.grants.Grants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.grants.Grants.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.grants.Grants.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.grants.Grants.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.grants.Grants.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.grants.Grants.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.grants.Grants.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.grants.Grants.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.grants.Grants.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.grants.Grants.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.grants.Grants.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.grants.Grants.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.grants.Grants.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.grants.Grants.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.grants.Grants.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.grants.Grants.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.grants.Grants.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.grants.Grants.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grants.Grants.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grants.Grants.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.grants.Grants.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.Grants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.grants.Grants.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grants.Grants.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.grants.Grants.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.grants.Grants.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.grants.Grants.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.grants.Grants.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grants.Grants.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGrant` <a name="PutGrant" id="@cdktf/provider-databricks.grants.Grants.putGrant"></a>

```csharp
private void PutGrant(IResolvable|GrantsGrant[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.grants.Grants.putGrant.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.grants.GrantsGrant">GrantsGrant</a>[]

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-databricks.grants.Grants.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetCredential` <a name="ResetCredential" id="@cdktf/provider-databricks.grants.Grants.resetCredential"></a>

```csharp
private void ResetCredential()
```

##### `ResetExternalLocation` <a name="ResetExternalLocation" id="@cdktf/provider-databricks.grants.Grants.resetExternalLocation"></a>

```csharp
private void ResetExternalLocation()
```

##### `ResetForeignConnection` <a name="ResetForeignConnection" id="@cdktf/provider-databricks.grants.Grants.resetForeignConnection"></a>

```csharp
private void ResetForeignConnection()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-databricks.grants.Grants.resetFunction"></a>

```csharp
private void ResetFunction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.grants.Grants.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastore` <a name="ResetMetastore" id="@cdktf/provider-databricks.grants.Grants.resetMetastore"></a>

```csharp
private void ResetMetastore()
```

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-databricks.grants.Grants.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktf/provider-databricks.grants.Grants.resetPipeline"></a>

```csharp
private void ResetPipeline()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktf/provider-databricks.grants.Grants.resetRecipient"></a>

```csharp
private void ResetRecipient()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-databricks.grants.Grants.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetShare` <a name="ResetShare" id="@cdktf/provider-databricks.grants.Grants.resetShare"></a>

```csharp
private void ResetShare()
```

##### `ResetStorageCredential` <a name="ResetStorageCredential" id="@cdktf/provider-databricks.grants.Grants.resetStorageCredential"></a>

```csharp
private void ResetStorageCredential()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.grants.Grants.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-databricks.grants.Grants.resetVolume"></a>

```csharp
private void ResetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Grants resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.grants.Grants.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Grants.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.grants.Grants.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.grants.Grants.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Grants.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.grants.Grants.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.grants.Grants.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Grants.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.grants.Grants.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.grants.Grants.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Grants.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Grants resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.grants.Grants.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.grants.Grants.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Grants to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.grants.Grants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Grants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grants.Grants.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Grants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.grant">Grant</a></code> | <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList">GrantsGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.credentialInput">CredentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.externalLocationInput">ExternalLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.foreignConnectionInput">ForeignConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.functionInput">FunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.grantInput">GrantInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.grants.GrantsGrant">GrantsGrant</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.metastoreInput">MetastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.pipelineInput">PipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.recipientInput">RecipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.shareInput">ShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.storageCredentialInput">StorageCredentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.volumeInput">VolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.credential">Credential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.externalLocation">ExternalLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.foreignConnection">ForeignConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.metastore">Metastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.pipeline">Pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.recipient">Recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.share">Share</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.storageCredential">StorageCredential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.volume">Volume</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.grants.Grants.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.grants.Grants.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.grants.Grants.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.grants.Grants.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.grants.Grants.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.grants.Grants.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.grants.Grants.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.grants.Grants.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.grants.Grants.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.grants.Grants.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.grants.Grants.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.grants.Grants.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grants.Grants.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.grants.Grants.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Grant`<sup>Required</sup> <a name="Grant" id="@cdktf/provider-databricks.grants.Grants.property.grant"></a>

```csharp
public GrantsGrantList Grant { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.grants.GrantsGrantList">GrantsGrantList</a>

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-databricks.grants.Grants.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `CredentialInput`<sup>Optional</sup> <a name="CredentialInput" id="@cdktf/provider-databricks.grants.Grants.property.credentialInput"></a>

```csharp
public string CredentialInput { get; }
```

- *Type:* string

---

##### `ExternalLocationInput`<sup>Optional</sup> <a name="ExternalLocationInput" id="@cdktf/provider-databricks.grants.Grants.property.externalLocationInput"></a>

```csharp
public string ExternalLocationInput { get; }
```

- *Type:* string

---

##### `ForeignConnectionInput`<sup>Optional</sup> <a name="ForeignConnectionInput" id="@cdktf/provider-databricks.grants.Grants.property.foreignConnectionInput"></a>

```csharp
public string ForeignConnectionInput { get; }
```

- *Type:* string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-databricks.grants.Grants.property.functionInput"></a>

```csharp
public string FunctionInput { get; }
```

- *Type:* string

---

##### `GrantInput`<sup>Optional</sup> <a name="GrantInput" id="@cdktf/provider-databricks.grants.Grants.property.grantInput"></a>

```csharp
public IResolvable|GrantsGrant[] GrantInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.grants.GrantsGrant">GrantsGrant</a>[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.grants.Grants.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreInput`<sup>Optional</sup> <a name="MetastoreInput" id="@cdktf/provider-databricks.grants.Grants.property.metastoreInput"></a>

```csharp
public string MetastoreInput { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-databricks.grants.Grants.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktf/provider-databricks.grants.Grants.property.pipelineInput"></a>

```csharp
public string PipelineInput { get; }
```

- *Type:* string

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktf/provider-databricks.grants.Grants.property.recipientInput"></a>

```csharp
public string RecipientInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-databricks.grants.Grants.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `ShareInput`<sup>Optional</sup> <a name="ShareInput" id="@cdktf/provider-databricks.grants.Grants.property.shareInput"></a>

```csharp
public string ShareInput { get; }
```

- *Type:* string

---

##### `StorageCredentialInput`<sup>Optional</sup> <a name="StorageCredentialInput" id="@cdktf/provider-databricks.grants.Grants.property.storageCredentialInput"></a>

```csharp
public string StorageCredentialInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.grants.Grants.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-databricks.grants.Grants.property.volumeInput"></a>

```csharp
public string VolumeInput { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-databricks.grants.Grants.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-databricks.grants.Grants.property.credential"></a>

```csharp
public string Credential { get; }
```

- *Type:* string

---

##### `ExternalLocation`<sup>Required</sup> <a name="ExternalLocation" id="@cdktf/provider-databricks.grants.Grants.property.externalLocation"></a>

```csharp
public string ExternalLocation { get; }
```

- *Type:* string

---

##### `ForeignConnection`<sup>Required</sup> <a name="ForeignConnection" id="@cdktf/provider-databricks.grants.Grants.property.foreignConnection"></a>

```csharp
public string ForeignConnection { get; }
```

- *Type:* string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.grants.Grants.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grants.Grants.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metastore`<sup>Required</sup> <a name="Metastore" id="@cdktf/provider-databricks.grants.Grants.property.metastore"></a>

```csharp
public string Metastore { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-databricks.grants.Grants.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-databricks.grants.Grants.property.pipeline"></a>

```csharp
public string Pipeline { get; }
```

- *Type:* string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktf/provider-databricks.grants.Grants.property.recipient"></a>

```csharp
public string Recipient { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-databricks.grants.Grants.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Share`<sup>Required</sup> <a name="Share" id="@cdktf/provider-databricks.grants.Grants.property.share"></a>

```csharp
public string Share { get; }
```

- *Type:* string

---

##### `StorageCredential`<sup>Required</sup> <a name="StorageCredential" id="@cdktf/provider-databricks.grants.Grants.property.storageCredential"></a>

```csharp
public string StorageCredential { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.grants.Grants.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-databricks.grants.Grants.property.volume"></a>

```csharp
public string Volume { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.Grants.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.grants.Grants.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantsConfig <a name="GrantsConfig" id="@cdktf/provider-databricks.grants.GrantsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.grants.GrantsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new GrantsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|GrantsGrant[] Grant,
    string Catalog = null,
    string Credential = null,
    string ExternalLocation = null,
    string ForeignConnection = null,
    string Function = null,
    string Id = null,
    string Metastore = null,
    string Model = null,
    string Pipeline = null,
    string Recipient = null,
    string Schema = null,
    string Share = null,
    string StorageCredential = null,
    string Table = null,
    string Volume = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.grant">Grant</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.grants.GrantsGrant">GrantsGrant</a>[]</code> | grant block. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#catalog Grants#catalog}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.credential">Credential</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#credential Grants#credential}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.externalLocation">ExternalLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#external_location Grants#external_location}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.foreignConnection">ForeignConnection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#foreign_connection Grants#foreign_connection}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.function">Function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#function Grants#function}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#id Grants#id}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.metastore">Metastore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#metastore Grants#metastore}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#model Grants#model}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.pipeline">Pipeline</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#pipeline Grants#pipeline}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.recipient">Recipient</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#recipient Grants#recipient}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#schema Grants#schema}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.share">Share</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#share Grants#share}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.storageCredential">StorageCredential</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#storage_credential Grants#storage_credential}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.table">Table</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#table Grants#table}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsConfig.property.volume">Volume</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#volume Grants#volume}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.grants.GrantsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.grants.GrantsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.grants.GrantsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.grants.GrantsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.grants.GrantsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grants.GrantsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.grants.GrantsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Grant`<sup>Required</sup> <a name="Grant" id="@cdktf/provider-databricks.grants.GrantsConfig.property.grant"></a>

```csharp
public IResolvable|GrantsGrant[] Grant { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.grants.GrantsGrant">GrantsGrant</a>[]

grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#grant Grants#grant}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-databricks.grants.GrantsConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#catalog Grants#catalog}.

---

##### `Credential`<sup>Optional</sup> <a name="Credential" id="@cdktf/provider-databricks.grants.GrantsConfig.property.credential"></a>

```csharp
public string Credential { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#credential Grants#credential}.

---

##### `ExternalLocation`<sup>Optional</sup> <a name="ExternalLocation" id="@cdktf/provider-databricks.grants.GrantsConfig.property.externalLocation"></a>

```csharp
public string ExternalLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#external_location Grants#external_location}.

---

##### `ForeignConnection`<sup>Optional</sup> <a name="ForeignConnection" id="@cdktf/provider-databricks.grants.GrantsConfig.property.foreignConnection"></a>

```csharp
public string ForeignConnection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#foreign_connection Grants#foreign_connection}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-databricks.grants.GrantsConfig.property.function"></a>

```csharp
public string Function { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#function Grants#function}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.grants.GrantsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#id Grants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metastore`<sup>Optional</sup> <a name="Metastore" id="@cdktf/provider-databricks.grants.GrantsConfig.property.metastore"></a>

```csharp
public string Metastore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#metastore Grants#metastore}.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-databricks.grants.GrantsConfig.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#model Grants#model}.

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktf/provider-databricks.grants.GrantsConfig.property.pipeline"></a>

```csharp
public string Pipeline { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#pipeline Grants#pipeline}.

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktf/provider-databricks.grants.GrantsConfig.property.recipient"></a>

```csharp
public string Recipient { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#recipient Grants#recipient}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-databricks.grants.GrantsConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#schema Grants#schema}.

---

##### `Share`<sup>Optional</sup> <a name="Share" id="@cdktf/provider-databricks.grants.GrantsConfig.property.share"></a>

```csharp
public string Share { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#share Grants#share}.

---

##### `StorageCredential`<sup>Optional</sup> <a name="StorageCredential" id="@cdktf/provider-databricks.grants.GrantsConfig.property.storageCredential"></a>

```csharp
public string StorageCredential { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#storage_credential Grants#storage_credential}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.grants.GrantsConfig.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#table Grants#table}.

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-databricks.grants.GrantsConfig.property.volume"></a>

```csharp
public string Volume { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#volume Grants#volume}.

---

### GrantsGrant <a name="GrantsGrant" id="@cdktf/provider-databricks.grants.GrantsGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.grants.GrantsGrant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new GrantsGrant {
    string Principal,
    string[] Privileges
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrant.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#principal Grants#principal}. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrant.property.privileges">Privileges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#privileges Grants#privileges}. |

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-databricks.grants.GrantsGrant.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#principal Grants#principal}.

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-databricks.grants.GrantsGrant.property.privileges"></a>

```csharp
public string[] Privileges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/resources/grants#privileges Grants#privileges}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantsGrantList <a name="GrantsGrantList" id="@cdktf/provider-databricks.grants.GrantsGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.grants.GrantsGrantList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new GrantsGrantList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.grants.GrantsGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.grants.GrantsGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.grants.GrantsGrantList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.grants.GrantsGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.grants.GrantsGrantList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.grants.GrantsGrantList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.grants.GrantsGrantList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.grants.GrantsGrantList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.grants.GrantsGrantList.get"></a>

```csharp
private GrantsGrantOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.grants.GrantsGrantList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.grants.GrantsGrant">GrantsGrant</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.grants.GrantsGrantList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.grants.GrantsGrantList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.grants.GrantsGrantList.property.internalValue"></a>

```csharp
public IResolvable|GrantsGrant[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.grants.GrantsGrant">GrantsGrant</a>[]

---


### GrantsGrantOutputReference <a name="GrantsGrantOutputReference" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new GrantsGrantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.privilegesInput">PrivilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.privileges">Privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.grants.GrantsGrant">GrantsGrant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.privilegesInput"></a>

```csharp
public string[] PrivilegesInput { get; }
```

- *Type:* string[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.privileges"></a>

```csharp
public string[] Privileges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.grants.GrantsGrantOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GrantsGrant InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.grants.GrantsGrant">GrantsGrant</a>

---



