# `grant` Submodule <a name="`grant` Submodule" id="@cdktf/provider-databricks.grant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Grant <a name="Grant" id="@cdktf/provider-databricks.grant.Grant"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant databricks_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.grant.Grant.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new Grant(Construct Scope, string Id, GrantConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.grant.GrantConfig">GrantConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.grant.Grant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.grant.GrantConfig">GrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetExternalLocation">ResetExternalLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetForeignConnection">ResetForeignConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetMetastore">ResetMetastore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetModel">ResetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetRecipient">ResetRecipient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetShare">ResetShare</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetStorageCredential">ResetStorageCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetTable">ResetTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.resetVolume">ResetVolume</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.grant.Grant.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.grant.Grant.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.grant.Grant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.grant.Grant.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.grant.Grant.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.grant.Grant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.grant.Grant.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.grant.Grant.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.grant.Grant.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.grant.Grant.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.grant.Grant.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.grant.Grant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.grant.Grant.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.grant.Grant.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.grant.Grant.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grant.Grant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grant.Grant.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.grant.Grant.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.grant.Grant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.grant.Grant.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grant.Grant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.grant.Grant.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.grant.Grant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.grant.Grant.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.grant.Grant.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grant.Grant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-databricks.grant.Grant.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetExternalLocation` <a name="ResetExternalLocation" id="@cdktf/provider-databricks.grant.Grant.resetExternalLocation"></a>

```csharp
private void ResetExternalLocation()
```

##### `ResetForeignConnection` <a name="ResetForeignConnection" id="@cdktf/provider-databricks.grant.Grant.resetForeignConnection"></a>

```csharp
private void ResetForeignConnection()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-databricks.grant.Grant.resetFunction"></a>

```csharp
private void ResetFunction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.grant.Grant.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastore` <a name="ResetMetastore" id="@cdktf/provider-databricks.grant.Grant.resetMetastore"></a>

```csharp
private void ResetMetastore()
```

##### `ResetModel` <a name="ResetModel" id="@cdktf/provider-databricks.grant.Grant.resetModel"></a>

```csharp
private void ResetModel()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktf/provider-databricks.grant.Grant.resetPipeline"></a>

```csharp
private void ResetPipeline()
```

##### `ResetRecipient` <a name="ResetRecipient" id="@cdktf/provider-databricks.grant.Grant.resetRecipient"></a>

```csharp
private void ResetRecipient()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-databricks.grant.Grant.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetShare` <a name="ResetShare" id="@cdktf/provider-databricks.grant.Grant.resetShare"></a>

```csharp
private void ResetShare()
```

##### `ResetStorageCredential` <a name="ResetStorageCredential" id="@cdktf/provider-databricks.grant.Grant.resetStorageCredential"></a>

```csharp
private void ResetStorageCredential()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.grant.Grant.resetTable"></a>

```csharp
private void ResetTable()
```

##### `ResetVolume` <a name="ResetVolume" id="@cdktf/provider-databricks.grant.Grant.resetVolume"></a>

```csharp
private void ResetVolume()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.grant.Grant.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Grant.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.grant.Grant.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.grant.Grant.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Grant.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.grant.Grant.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.grant.Grant.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Grant.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.grant.Grant.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Grant.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Grant to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Grant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grant.Grant.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Grant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.externalLocationInput">ExternalLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.foreignConnectionInput">ForeignConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.functionInput">FunctionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.metastoreInput">MetastoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.modelInput">ModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.pipelineInput">PipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.principalInput">PrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.privilegesInput">PrivilegesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.recipientInput">RecipientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.shareInput">ShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.storageCredentialInput">StorageCredentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.tableInput">TableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.volumeInput">VolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.externalLocation">ExternalLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.foreignConnection">ForeignConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.function">Function</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.metastore">Metastore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.pipeline">Pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.principal">Principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.privileges">Privileges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.recipient">Recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.share">Share</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.storageCredential">StorageCredential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.table">Table</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.volume">Volume</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.grant.Grant.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.grant.Grant.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.grant.Grant.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.grant.Grant.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.grant.Grant.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.grant.Grant.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.grant.Grant.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.grant.Grant.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.grant.Grant.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.grant.Grant.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.grant.Grant.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.grant.Grant.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grant.Grant.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.grant.Grant.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-databricks.grant.Grant.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `ExternalLocationInput`<sup>Optional</sup> <a name="ExternalLocationInput" id="@cdktf/provider-databricks.grant.Grant.property.externalLocationInput"></a>

```csharp
public string ExternalLocationInput { get; }
```

- *Type:* string

---

##### `ForeignConnectionInput`<sup>Optional</sup> <a name="ForeignConnectionInput" id="@cdktf/provider-databricks.grant.Grant.property.foreignConnectionInput"></a>

```csharp
public string ForeignConnectionInput { get; }
```

- *Type:* string

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-databricks.grant.Grant.property.functionInput"></a>

```csharp
public string FunctionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.grant.Grant.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreInput`<sup>Optional</sup> <a name="MetastoreInput" id="@cdktf/provider-databricks.grant.Grant.property.metastoreInput"></a>

```csharp
public string MetastoreInput { get; }
```

- *Type:* string

---

##### `ModelInput`<sup>Optional</sup> <a name="ModelInput" id="@cdktf/provider-databricks.grant.Grant.property.modelInput"></a>

```csharp
public string ModelInput { get; }
```

- *Type:* string

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktf/provider-databricks.grant.Grant.property.pipelineInput"></a>

```csharp
public string PipelineInput { get; }
```

- *Type:* string

---

##### `PrincipalInput`<sup>Optional</sup> <a name="PrincipalInput" id="@cdktf/provider-databricks.grant.Grant.property.principalInput"></a>

```csharp
public string PrincipalInput { get; }
```

- *Type:* string

---

##### `PrivilegesInput`<sup>Optional</sup> <a name="PrivilegesInput" id="@cdktf/provider-databricks.grant.Grant.property.privilegesInput"></a>

```csharp
public string[] PrivilegesInput { get; }
```

- *Type:* string[]

---

##### `RecipientInput`<sup>Optional</sup> <a name="RecipientInput" id="@cdktf/provider-databricks.grant.Grant.property.recipientInput"></a>

```csharp
public string RecipientInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-databricks.grant.Grant.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `ShareInput`<sup>Optional</sup> <a name="ShareInput" id="@cdktf/provider-databricks.grant.Grant.property.shareInput"></a>

```csharp
public string ShareInput { get; }
```

- *Type:* string

---

##### `StorageCredentialInput`<sup>Optional</sup> <a name="StorageCredentialInput" id="@cdktf/provider-databricks.grant.Grant.property.storageCredentialInput"></a>

```csharp
public string StorageCredentialInput { get; }
```

- *Type:* string

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.grant.Grant.property.tableInput"></a>

```csharp
public string TableInput { get; }
```

- *Type:* string

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-databricks.grant.Grant.property.volumeInput"></a>

```csharp
public string VolumeInput { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-databricks.grant.Grant.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `ExternalLocation`<sup>Required</sup> <a name="ExternalLocation" id="@cdktf/provider-databricks.grant.Grant.property.externalLocation"></a>

```csharp
public string ExternalLocation { get; }
```

- *Type:* string

---

##### `ForeignConnection`<sup>Required</sup> <a name="ForeignConnection" id="@cdktf/provider-databricks.grant.Grant.property.foreignConnection"></a>

```csharp
public string ForeignConnection { get; }
```

- *Type:* string

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.grant.Grant.property.function"></a>

```csharp
public string Function { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.grant.Grant.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metastore`<sup>Required</sup> <a name="Metastore" id="@cdktf/provider-databricks.grant.Grant.property.metastore"></a>

```csharp
public string Metastore { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-databricks.grant.Grant.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-databricks.grant.Grant.property.pipeline"></a>

```csharp
public string Pipeline { get; }
```

- *Type:* string

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-databricks.grant.Grant.property.principal"></a>

```csharp
public string Principal { get; }
```

- *Type:* string

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-databricks.grant.Grant.property.privileges"></a>

```csharp
public string[] Privileges { get; }
```

- *Type:* string[]

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktf/provider-databricks.grant.Grant.property.recipient"></a>

```csharp
public string Recipient { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-databricks.grant.Grant.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Share`<sup>Required</sup> <a name="Share" id="@cdktf/provider-databricks.grant.Grant.property.share"></a>

```csharp
public string Share { get; }
```

- *Type:* string

---

##### `StorageCredential`<sup>Required</sup> <a name="StorageCredential" id="@cdktf/provider-databricks.grant.Grant.property.storageCredential"></a>

```csharp
public string StorageCredential { get; }
```

- *Type:* string

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.grant.Grant.property.table"></a>

```csharp
public string Table { get; }
```

- *Type:* string

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-databricks.grant.Grant.property.volume"></a>

```csharp
public string Volume { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.grant.Grant.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.grant.Grant.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantConfig <a name="GrantConfig" id="@cdktf/provider-databricks.grant.GrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.grant.GrantConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new GrantConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Principal,
    string[] Privileges,
    string Catalog = null,
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
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.principal">Principal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#principal Grant#principal}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.privileges">Privileges</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#privileges Grant#privileges}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#catalog Grant#catalog}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.externalLocation">ExternalLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#external_location Grant#external_location}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.foreignConnection">ForeignConnection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#foreign_connection Grant#foreign_connection}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.function">Function</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#function Grant#function}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#id Grant#id}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.metastore">Metastore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#metastore Grant#metastore}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.model">Model</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#model Grant#model}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.pipeline">Pipeline</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#pipeline Grant#pipeline}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.recipient">Recipient</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#recipient Grant#recipient}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#schema Grant#schema}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.share">Share</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#share Grant#share}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.storageCredential">StorageCredential</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#storage_credential Grant#storage_credential}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.table">Table</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#table Grant#table}. |
| <code><a href="#@cdktf/provider-databricks.grant.GrantConfig.property.volume">Volume</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#volume Grant#volume}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.grant.GrantConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.grant.GrantConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.grant.GrantConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.grant.GrantConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.grant.GrantConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.grant.GrantConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.grant.GrantConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Principal`<sup>Required</sup> <a name="Principal" id="@cdktf/provider-databricks.grant.GrantConfig.property.principal"></a>

```csharp
public string Principal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#principal Grant#principal}.

---

##### `Privileges`<sup>Required</sup> <a name="Privileges" id="@cdktf/provider-databricks.grant.GrantConfig.property.privileges"></a>

```csharp
public string[] Privileges { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#privileges Grant#privileges}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-databricks.grant.GrantConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#catalog Grant#catalog}.

---

##### `ExternalLocation`<sup>Optional</sup> <a name="ExternalLocation" id="@cdktf/provider-databricks.grant.GrantConfig.property.externalLocation"></a>

```csharp
public string ExternalLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#external_location Grant#external_location}.

---

##### `ForeignConnection`<sup>Optional</sup> <a name="ForeignConnection" id="@cdktf/provider-databricks.grant.GrantConfig.property.foreignConnection"></a>

```csharp
public string ForeignConnection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#foreign_connection Grant#foreign_connection}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-databricks.grant.GrantConfig.property.function"></a>

```csharp
public string Function { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#function Grant#function}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.grant.GrantConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#id Grant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metastore`<sup>Optional</sup> <a name="Metastore" id="@cdktf/provider-databricks.grant.GrantConfig.property.metastore"></a>

```csharp
public string Metastore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#metastore Grant#metastore}.

---

##### `Model`<sup>Optional</sup> <a name="Model" id="@cdktf/provider-databricks.grant.GrantConfig.property.model"></a>

```csharp
public string Model { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#model Grant#model}.

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktf/provider-databricks.grant.GrantConfig.property.pipeline"></a>

```csharp
public string Pipeline { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#pipeline Grant#pipeline}.

---

##### `Recipient`<sup>Optional</sup> <a name="Recipient" id="@cdktf/provider-databricks.grant.GrantConfig.property.recipient"></a>

```csharp
public string Recipient { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#recipient Grant#recipient}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-databricks.grant.GrantConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#schema Grant#schema}.

---

##### `Share`<sup>Optional</sup> <a name="Share" id="@cdktf/provider-databricks.grant.GrantConfig.property.share"></a>

```csharp
public string Share { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#share Grant#share}.

---

##### `StorageCredential`<sup>Optional</sup> <a name="StorageCredential" id="@cdktf/provider-databricks.grant.GrantConfig.property.storageCredential"></a>

```csharp
public string StorageCredential { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#storage_credential Grant#storage_credential}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.grant.GrantConfig.property.table"></a>

```csharp
public string Table { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#table Grant#table}.

---

##### `Volume`<sup>Optional</sup> <a name="Volume" id="@cdktf/provider-databricks.grant.GrantConfig.property.volume"></a>

```csharp
public string Volume { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.42.0/docs/resources/grant#volume Grant#volume}.

---



