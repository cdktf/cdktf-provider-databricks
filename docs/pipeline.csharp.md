# `pipeline` Submodule <a name="`pipeline` Submodule" id="@cdktf/provider-databricks.pipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pipeline <a name="Pipeline" id="@cdktf/provider-databricks.pipeline.Pipeline"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline databricks_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new Pipeline(Construct Scope, string Id, PipelineConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig">PipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.pipeline.Pipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineConfig">PipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putCluster">PutCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putLibrary">PutLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames">ResetAllowDuplicateNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetChannel">ResetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment">ResetDevelopment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetEdition">ResetEdition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary">ResetLibrary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton">ResetPhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetServerless">ResetServerless</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.Pipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.Pipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.pipeline.Pipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.pipeline.Pipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.pipeline.Pipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.pipeline.Pipeline.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.pipeline.Pipeline.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.Pipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.pipeline.Pipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.pipeline.Pipeline.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.pipeline.Pipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.Pipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCluster` <a name="PutCluster" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster"></a>

```csharp
private void PutCluster(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.Pipeline.putCluster.parameter.value"></a>

- *Type:* object

---

##### `PutFilters` <a name="PutFilters" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters"></a>

```csharp
private void PutFilters(PipelineFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.Pipeline.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---

##### `PutLibrary` <a name="PutLibrary" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary"></a>

```csharp
private void PutLibrary(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.Pipeline.putLibrary.parameter.value"></a>

- *Type:* object

---

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification"></a>

```csharp
private void PutNotification(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.Pipeline.putNotification.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts"></a>

```csharp
private void PutTimeouts(PipelineTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.Pipeline.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

---

##### `ResetAllowDuplicateNames` <a name="ResetAllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.Pipeline.resetAllowDuplicateNames"></a>

```csharp
private void ResetAllowDuplicateNames()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetChannel` <a name="ResetChannel" id="@cdktf/provider-databricks.pipeline.Pipeline.resetChannel"></a>

```csharp
private void ResetChannel()
```

##### `ResetCluster` <a name="ResetCluster" id="@cdktf/provider-databricks.pipeline.Pipeline.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktf/provider-databricks.pipeline.Pipeline.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktf/provider-databricks.pipeline.Pipeline.resetContinuous"></a>

```csharp
private void ResetContinuous()
```

##### `ResetDevelopment` <a name="ResetDevelopment" id="@cdktf/provider-databricks.pipeline.Pipeline.resetDevelopment"></a>

```csharp
private void ResetDevelopment()
```

##### `ResetEdition` <a name="ResetEdition" id="@cdktf/provider-databricks.pipeline.Pipeline.resetEdition"></a>

```csharp
private void ResetEdition()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktf/provider-databricks.pipeline.Pipeline.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.pipeline.Pipeline.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLibrary` <a name="ResetLibrary" id="@cdktf/provider-databricks.pipeline.Pipeline.resetLibrary"></a>

```csharp
private void ResetLibrary()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.pipeline.Pipeline.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-databricks.pipeline.Pipeline.resetNotification"></a>

```csharp
private void ResetNotification()
```

##### `ResetPhoton` <a name="ResetPhoton" id="@cdktf/provider-databricks.pipeline.Pipeline.resetPhoton"></a>

```csharp
private void ResetPhoton()
```

##### `ResetServerless` <a name="ResetServerless" id="@cdktf/provider-databricks.pipeline.Pipeline.resetServerless"></a>

```csharp
private void ResetServerless()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-databricks.pipeline.Pipeline.resetStorage"></a>

```csharp
private void ResetStorage()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.pipeline.Pipeline.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Pipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.pipeline.Pipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Pipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Pipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.pipeline.Pipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Pipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Pipeline resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.pipeline.Pipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Pipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.cluster">Cluster</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.library">Library</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput">AllowDuplicateNamesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput">ChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput">ClusterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput">ConfigurationInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput">ContinuousInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput">DevelopmentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput">EditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput">LibraryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput">NotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput">PhotonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput">ServerlessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput">StorageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames">AllowDuplicateNames</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.channel">Channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.configuration">Configuration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.continuous">Continuous</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.development">Development</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.edition">Edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.photon">Photon</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.serverless">Serverless</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.storage">Storage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.target">Target</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.pipeline.Pipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.Pipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.pipeline.Pipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.pipeline.Pipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.pipeline.Pipeline.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.pipeline.Pipeline.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.pipeline.Pipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.pipeline.Pipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.pipeline.Pipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.pipeline.Pipeline.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-databricks.pipeline.Pipeline.property.cluster"></a>

```csharp
public PipelineClusterList Cluster { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList">PipelineClusterList</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filters"></a>

```csharp
public PipelineFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference">PipelineFiltersOutputReference</a>

---

##### `Library`<sup>Required</sup> <a name="Library" id="@cdktf/provider-databricks.pipeline.Pipeline.property.library"></a>

```csharp
public PipelineLibraryList Library { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList">PipelineLibraryList</a>

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notification"></a>

```csharp
public PipelineNotificationList Notification { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList">PipelineNotificationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeouts"></a>

```csharp
public PipelineTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference">PipelineTimeoutsOutputReference</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.pipeline.Pipeline.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `AllowDuplicateNamesInput`<sup>Optional</sup> <a name="AllowDuplicateNamesInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNamesInput"></a>

```csharp
public object AllowDuplicateNamesInput { get; }
```

- *Type:* object

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `ChannelInput`<sup>Optional</sup> <a name="ChannelInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channelInput"></a>

```csharp
public string ChannelInput { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.clusterInput"></a>

```csharp
public object ClusterInput { get; }
```

- *Type:* object

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configurationInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ConfigurationInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuousInput"></a>

```csharp
public object ContinuousInput { get; }
```

- *Type:* object

---

##### `DevelopmentInput`<sup>Optional</sup> <a name="DevelopmentInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.developmentInput"></a>

```csharp
public object DevelopmentInput { get; }
```

- *Type:* object

---

##### `EditionInput`<sup>Optional</sup> <a name="EditionInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.editionInput"></a>

```csharp
public string EditionInput { get; }
```

- *Type:* string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.filtersInput"></a>

```csharp
public PipelineFilters FiltersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LibraryInput`<sup>Optional</sup> <a name="LibraryInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.libraryInput"></a>

```csharp
public object LibraryInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.notificationInput"></a>

```csharp
public object NotificationInput { get; }
```

- *Type:* object

---

##### `PhotonInput`<sup>Optional</sup> <a name="PhotonInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photonInput"></a>

```csharp
public object PhotonInput { get; }
```

- *Type:* object

---

##### `ServerlessInput`<sup>Optional</sup> <a name="ServerlessInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverlessInput"></a>

```csharp
public object ServerlessInput { get; }
```

- *Type:* object

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storageInput"></a>

```csharp
public string StorageInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.pipeline.Pipeline.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AllowDuplicateNames`<sup>Required</sup> <a name="AllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.Pipeline.property.allowDuplicateNames"></a>

```csharp
public object AllowDuplicateNames { get; }
```

- *Type:* object

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-databricks.pipeline.Pipeline.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktf/provider-databricks.pipeline.Pipeline.property.channel"></a>

```csharp
public string Channel { get; }
```

- *Type:* string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktf/provider-databricks.pipeline.Pipeline.property.configuration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Configuration { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktf/provider-databricks.pipeline.Pipeline.property.continuous"></a>

```csharp
public object Continuous { get; }
```

- *Type:* object

---

##### `Development`<sup>Required</sup> <a name="Development" id="@cdktf/provider-databricks.pipeline.Pipeline.property.development"></a>

```csharp
public object Development { get; }
```

- *Type:* object

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-databricks.pipeline.Pipeline.property.edition"></a>

```csharp
public string Edition { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.Pipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.pipeline.Pipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Photon`<sup>Required</sup> <a name="Photon" id="@cdktf/provider-databricks.pipeline.Pipeline.property.photon"></a>

```csharp
public object Photon { get; }
```

- *Type:* object

---

##### `Serverless`<sup>Required</sup> <a name="Serverless" id="@cdktf/provider-databricks.pipeline.Pipeline.property.serverless"></a>

```csharp
public object Serverless { get; }
```

- *Type:* object

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-databricks.pipeline.Pipeline.property.storage"></a>

```csharp
public string Storage { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-databricks.pipeline.Pipeline.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.pipeline.Pipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineCluster <a name="PipelineCluster" id="@cdktf/provider-databricks.pipeline.PipelineCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineCluster {
    object ApplyPolicyDefaultValues = null,
    PipelineClusterAutoscale Autoscale = null,
    PipelineClusterAwsAttributes AwsAttributes = null,
    PipelineClusterAzureAttributes AzureAttributes = null,
    PipelineClusterClusterLogConf ClusterLogConf = null,
    System.Collections.Generic.IDictionary<string, string> CustomTags = null,
    string DriverInstancePoolId = null,
    string DriverNodeTypeId = null,
    object EnableLocalDiskEncryption = null,
    PipelineClusterGcpAttributes GcpAttributes = null,
    object InitScripts = null,
    string InstancePoolId = null,
    string Label = null,
    string NodeTypeId = null,
    double NumWorkers = null,
    string PolicyId = null,
    System.Collections.Generic.IDictionary<string, string> SparkConf = null,
    System.Collections.Generic.IDictionary<string, string> SparkEnvVars = null,
    string[] SshPublicKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | autoscale block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | cluster_log_conf block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts">InitScripts</a></code> | <code>object</code> | init_scripts block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#label Pipeline#label}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers">NumWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#num_workers Pipeline#num_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#policy_id Pipeline#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf">SparkConf</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars">SparkEnvVars</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}. |

---

##### `ApplyPolicyDefaultValues`<sup>Optional</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.applyPolicyDefaultValues"></a>

```csharp
public object ApplyPolicyDefaultValues { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#apply_policy_default_values Pipeline#apply_policy_default_values}.

---

##### `Autoscale`<sup>Optional</sup> <a name="Autoscale" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.autoscale"></a>

```csharp
public PipelineClusterAutoscale Autoscale { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

autoscale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#autoscale Pipeline#autoscale}

---

##### `AwsAttributes`<sup>Optional</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.awsAttributes"></a>

```csharp
public PipelineClusterAwsAttributes AwsAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#aws_attributes Pipeline#aws_attributes}

---

##### `AzureAttributes`<sup>Optional</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.azureAttributes"></a>

```csharp
public PipelineClusterAzureAttributes AzureAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#azure_attributes Pipeline#azure_attributes}

---

##### `ClusterLogConf`<sup>Optional</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.clusterLogConf"></a>

```csharp
public PipelineClusterClusterLogConf ClusterLogConf { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

cluster_log_conf block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#cluster_log_conf Pipeline#cluster_log_conf}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#custom_tags Pipeline#custom_tags}.

---

##### `DriverInstancePoolId`<sup>Optional</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverInstancePoolId"></a>

```csharp
public string DriverInstancePoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#driver_instance_pool_id Pipeline#driver_instance_pool_id}.

---

##### `DriverNodeTypeId`<sup>Optional</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.driverNodeTypeId"></a>

```csharp
public string DriverNodeTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#driver_node_type_id Pipeline#driver_node_type_id}.

---

##### `EnableLocalDiskEncryption`<sup>Optional</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.enableLocalDiskEncryption"></a>

```csharp
public object EnableLocalDiskEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#enable_local_disk_encryption Pipeline#enable_local_disk_encryption}.

---

##### `GcpAttributes`<sup>Optional</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.gcpAttributes"></a>

```csharp
public PipelineClusterGcpAttributes GcpAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#gcp_attributes Pipeline#gcp_attributes}

---

##### `InitScripts`<sup>Optional</sup> <a name="InitScripts" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.initScripts"></a>

```csharp
public object InitScripts { get; set; }
```

- *Type:* object

init_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#init_scripts Pipeline#init_scripts}

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#instance_pool_id Pipeline#instance_pool_id}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#label Pipeline#label}.

---

##### `NodeTypeId`<sup>Optional</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#node_type_id Pipeline#node_type_id}.

---

##### `NumWorkers`<sup>Optional</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.numWorkers"></a>

```csharp
public double NumWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#num_workers Pipeline#num_workers}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#policy_id Pipeline#policy_id}.

---

##### `SparkConf`<sup>Optional</sup> <a name="SparkConf" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkConf"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkConf { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#spark_conf Pipeline#spark_conf}.

---

##### `SparkEnvVars`<sup>Optional</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sparkEnvVars"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkEnvVars { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#spark_env_vars Pipeline#spark_env_vars}.

---

##### `SshPublicKeys`<sup>Optional</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineCluster.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#ssh_public_keys Pipeline#ssh_public_keys}.

---

### PipelineClusterAutoscale <a name="PipelineClusterAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterAutoscale {
    double MaxWorkers = null,
    double MinWorkers = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#max_workers Pipeline#max_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers">MinWorkers</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#min_workers Pipeline#min_workers}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#mode Pipeline#mode}. |

---

##### `MaxWorkers`<sup>Optional</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#max_workers Pipeline#max_workers}.

---

##### `MinWorkers`<sup>Optional</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.minWorkers"></a>

```csharp
public double MinWorkers { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#min_workers Pipeline#min_workers}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#mode Pipeline#mode}.

---

### PipelineClusterAwsAttributes <a name="PipelineClusterAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterAwsAttributes {
    string Availability = null,
    double EbsVolumeCount = null,
    double EbsVolumeSize = null,
    string EbsVolumeType = null,
    double FirstOnDemand = null,
    string InstanceProfileArn = null,
    double SpotBidPricePercent = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType">EbsVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `EbsVolumeCount`<sup>Optional</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeCount"></a>

```csharp
public double EbsVolumeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#ebs_volume_count Pipeline#ebs_volume_count}.

---

##### `EbsVolumeSize`<sup>Optional</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeSize"></a>

```csharp
public double EbsVolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#ebs_volume_size Pipeline#ebs_volume_size}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.ebsVolumeType"></a>

```csharp
public string EbsVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#ebs_volume_type Pipeline#ebs_volume_type}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.firstOnDemand"></a>

```csharp
public double FirstOnDemand { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#instance_profile_arn Pipeline#instance_profile_arn}.

---

##### `SpotBidPricePercent`<sup>Optional</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.spotBidPricePercent"></a>

```csharp
public double SpotBidPricePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#spot_bid_price_percent Pipeline#spot_bid_price_percent}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterAzureAttributes <a name="PipelineClusterAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterAzureAttributes {
    string Availability = null,
    double FirstOnDemand = null,
    double SpotBidMaxPrice = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand">FirstOnDemand</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `FirstOnDemand`<sup>Optional</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.firstOnDemand"></a>

```csharp
public double FirstOnDemand { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#first_on_demand Pipeline#first_on_demand}.

---

##### `SpotBidMaxPrice`<sup>Optional</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes.property.spotBidMaxPrice"></a>

```csharp
public double SpotBidMaxPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#spot_bid_max_price Pipeline#spot_bid_max_price}.

---

### PipelineClusterClusterLogConf <a name="PipelineClusterClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterClusterLogConf {
    PipelineClusterClusterLogConfDbfs Dbfs = null,
    PipelineClusterClusterLogConfS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | s3 block. |

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.dbfs"></a>

```csharp
public PipelineClusterClusterLogConfDbfs Dbfs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf.property.s3"></a>

```csharp
public PipelineClusterClusterLogConfS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#s3 Pipeline#s3}

---

### PipelineClusterClusterLogConfDbfs <a name="PipelineClusterClusterLogConfDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterClusterLogConfDbfs {
    string Destination
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterClusterLogConfS3 <a name="PipelineClusterClusterLogConfS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterClusterLogConfS3 {
    string Destination,
    string CannedAcl = null,
    object EnableEncryption = null,
    string EncryptionType = null,
    string Endpoint = null,
    string KmsKey = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl">CannedAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption">EnableEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType">EncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.cannedAcl"></a>

```csharp
public string CannedAcl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.enableEncryption"></a>

```csharp
public object EnableEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterGcpAttributes <a name="PipelineClusterGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterGcpAttributes {
    string Availability = null,
    string GoogleServiceAccount = null,
    double LocalSsdCount = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#availability Pipeline#availability}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#zone_id Pipeline#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#availability Pipeline#availability}.

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#google_service_account Pipeline#google_service_account}.

---

##### `LocalSsdCount`<sup>Optional</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#local_ssd_count Pipeline#local_ssd_count}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#zone_id Pipeline#zone_id}.

---

### PipelineClusterInitScripts <a name="PipelineClusterInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScripts {
    PipelineClusterInitScriptsAbfss Abfss = null,
    PipelineClusterInitScriptsDbfs Dbfs = null,
    PipelineClusterInitScriptsFile File = null,
    PipelineClusterInitScriptsGcs Gcs = null,
    PipelineClusterInitScriptsS3 S3 = null,
    PipelineClusterInitScriptsVolumes Volumes = null,
    PipelineClusterInitScriptsWorkspace Workspace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | abfss block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | dbfs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | gcs block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | volumes block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | workspace block. |

---

##### `Abfss`<sup>Optional</sup> <a name="Abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.abfss"></a>

```csharp
public PipelineClusterInitScriptsAbfss Abfss { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

abfss block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#abfss Pipeline#abfss}

---

##### `Dbfs`<sup>Optional</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.dbfs"></a>

```csharp
public PipelineClusterInitScriptsDbfs Dbfs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

dbfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#dbfs Pipeline#dbfs}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.file"></a>

```csharp
public PipelineClusterInitScriptsFile File { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#file Pipeline#file}

---

##### `Gcs`<sup>Optional</sup> <a name="Gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.gcs"></a>

```csharp
public PipelineClusterInitScriptsGcs Gcs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

gcs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#gcs Pipeline#gcs}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.s3"></a>

```csharp
public PipelineClusterInitScriptsS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#s3 Pipeline#s3}

---

##### `Volumes`<sup>Optional</sup> <a name="Volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.volumes"></a>

```csharp
public PipelineClusterInitScriptsVolumes Volumes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#volumes Pipeline#volumes}

---

##### `Workspace`<sup>Optional</sup> <a name="Workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScripts.property.workspace"></a>

```csharp
public PipelineClusterInitScriptsWorkspace Workspace { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#workspace Pipeline#workspace}

---

### PipelineClusterInitScriptsAbfss <a name="PipelineClusterInitScriptsAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsAbfss {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsDbfs <a name="PipelineClusterInitScriptsDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsDbfs {
    string Destination
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsFile <a name="PipelineClusterInitScriptsFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsFile {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsGcs <a name="PipelineClusterInitScriptsGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsGcs {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsS3 <a name="PipelineClusterInitScriptsS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsS3 {
    string Destination,
    string CannedAcl = null,
    object EnableEncryption = null,
    string EncryptionType = null,
    string Endpoint = null,
    string KmsKey = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl">CannedAcl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption">EnableEncryption</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType">EncryptionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#endpoint Pipeline#endpoint}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey">KmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#kms_key Pipeline#kms_key}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#region Pipeline#region}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}.

---

##### `CannedAcl`<sup>Optional</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.cannedAcl"></a>

```csharp
public string CannedAcl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#canned_acl Pipeline#canned_acl}.

---

##### `EnableEncryption`<sup>Optional</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.enableEncryption"></a>

```csharp
public object EnableEncryption { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#enable_encryption Pipeline#enable_encryption}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#encryption_type Pipeline#encryption_type}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#endpoint Pipeline#endpoint}.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#kms_key Pipeline#kms_key}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#region Pipeline#region}.

---

### PipelineClusterInitScriptsVolumes <a name="PipelineClusterInitScriptsVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsVolumes {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineClusterInitScriptsWorkspace <a name="PipelineClusterInitScriptsWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsWorkspace {
    string Destination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#destination Pipeline#destination}.

---

### PipelineConfig <a name="PipelineConfig" id="@cdktf/provider-databricks.pipeline.PipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AllowDuplicateNames = null,
    string Catalog = null,
    string Channel = null,
    object Cluster = null,
    System.Collections.Generic.IDictionary<string, string> Configuration = null,
    object Continuous = null,
    object Development = null,
    string Edition = null,
    PipelineFilters Filters = null,
    string Id = null,
    object Library = null,
    string Name = null,
    object Notification = null,
    object Photon = null,
    object Serverless = null,
    string Storage = null,
    string Target = null,
    PipelineTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames">AllowDuplicateNames</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#catalog Pipeline#catalog}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel">Channel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#channel Pipeline#channel}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster">Cluster</a></code> | <code>object</code> | cluster block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration">Configuration</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#configuration Pipeline#configuration}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous">Continuous</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#continuous Pipeline#continuous}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.development">Development</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#development Pipeline#development}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition">Edition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#edition Pipeline#edition}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters">Filters</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | filters block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#id Pipeline#id}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.library">Library</a></code> | <code>object</code> | library block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#name Pipeline#name}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification">Notification</a></code> | <code>object</code> | notification block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon">Photon</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#photon Pipeline#photon}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless">Serverless</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#serverless Pipeline#serverless}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage">Storage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#storage Pipeline#storage}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.target">Target</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#target Pipeline#target}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AllowDuplicateNames`<sup>Optional</sup> <a name="AllowDuplicateNames" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.allowDuplicateNames"></a>

```csharp
public object AllowDuplicateNames { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#allow_duplicate_names Pipeline#allow_duplicate_names}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#catalog Pipeline#catalog}.

---

##### `Channel`<sup>Optional</sup> <a name="Channel" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.channel"></a>

```csharp
public string Channel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#channel Pipeline#channel}.

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.cluster"></a>

```csharp
public object Cluster { get; set; }
```

- *Type:* object

cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#cluster Pipeline#cluster}

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.configuration"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Configuration { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#configuration Pipeline#configuration}.

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.continuous"></a>

```csharp
public object Continuous { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#continuous Pipeline#continuous}.

---

##### `Development`<sup>Optional</sup> <a name="Development" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.development"></a>

```csharp
public object Development { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#development Pipeline#development}.

---

##### `Edition`<sup>Optional</sup> <a name="Edition" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.edition"></a>

```csharp
public string Edition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#edition Pipeline#edition}.

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.filters"></a>

```csharp
public PipelineFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#filters Pipeline#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#id Pipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Library`<sup>Optional</sup> <a name="Library" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.library"></a>

```csharp
public object Library { get; set; }
```

- *Type:* object

library block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#library Pipeline#library}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#name Pipeline#name}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.notification"></a>

```csharp
public object Notification { get; set; }
```

- *Type:* object

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#notification Pipeline#notification}

---

##### `Photon`<sup>Optional</sup> <a name="Photon" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.photon"></a>

```csharp
public object Photon { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#photon Pipeline#photon}.

---

##### `Serverless`<sup>Optional</sup> <a name="Serverless" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.serverless"></a>

```csharp
public object Serverless { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#serverless Pipeline#serverless}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.storage"></a>

```csharp
public string Storage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#storage Pipeline#storage}.

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#target Pipeline#target}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.pipeline.PipelineConfig.property.timeouts"></a>

```csharp
public PipelineTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts">PipelineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#timeouts Pipeline#timeouts}

---

### PipelineFilters <a name="PipelineFilters" id="@cdktf/provider-databricks.pipeline.PipelineFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineFilters {
    string[] Exclude = null,
    string[] Include = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude">Exclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#exclude Pipeline#exclude}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters.property.include">Include</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#include Pipeline#include}. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.exclude"></a>

```csharp
public string[] Exclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#exclude Pipeline#exclude}.

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-databricks.pipeline.PipelineFilters.property.include"></a>

```csharp
public string[] Include { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#include Pipeline#include}.

---

### PipelineLibrary <a name="PipelineLibrary" id="@cdktf/provider-databricks.pipeline.PipelineLibrary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineLibrary {
    PipelineLibraryFile File = null,
    string Jar = null,
    PipelineLibraryMaven Maven = null,
    PipelineLibraryNotebook Notebook = null,
    string Whl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | file block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar">Jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#jar Pipeline#jar}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | notebook block. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl">Whl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#whl Pipeline#whl}. |

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.file"></a>

```csharp
public PipelineLibraryFile File { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#file Pipeline#file}

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.jar"></a>

```csharp
public string Jar { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#jar Pipeline#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.maven"></a>

```csharp
public PipelineLibraryMaven Maven { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#maven Pipeline#maven}

---

##### `Notebook`<sup>Optional</sup> <a name="Notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.notebook"></a>

```csharp
public PipelineLibraryNotebook Notebook { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

notebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#notebook Pipeline#notebook}

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktf/provider-databricks.pipeline.PipelineLibrary.property.whl"></a>

```csharp
public string Whl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#whl Pipeline#whl}.

---

### PipelineLibraryFile <a name="PipelineLibraryFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineLibraryFile {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFile.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineLibraryMaven <a name="PipelineLibraryMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineLibraryMaven {
    string Coordinates,
    string[] Exclusions = null,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates">Coordinates</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#coordinates Pipeline#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions">Exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#exclusions Pipeline#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#repo Pipeline#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.coordinates"></a>

```csharp
public string Coordinates { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#coordinates Pipeline#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#exclusions Pipeline#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMaven.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#repo Pipeline#repo}.

---

### PipelineLibraryNotebook <a name="PipelineLibraryNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineLibraryNotebook {
    string Path
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path">Path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#path Pipeline#path}. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#path Pipeline#path}.

---

### PipelineNotification <a name="PipelineNotification" id="@cdktf/provider-databricks.pipeline.PipelineNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineNotification {
    string[] Alerts,
    string[] EmailRecipients
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts">Alerts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#alerts Pipeline#alerts}. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients">EmailRecipients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}. |

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.alerts"></a>

```csharp
public string[] Alerts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#alerts Pipeline#alerts}.

---

##### `EmailRecipients`<sup>Required</sup> <a name="EmailRecipients" id="@cdktf/provider-databricks.pipeline.PipelineNotification.property.emailRecipients"></a>

```csharp
public string[] EmailRecipients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#email_recipients Pipeline#email_recipients}.

---

### PipelineTimeouts <a name="PipelineTimeouts" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineTimeouts {
    string Default = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#default Pipeline#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-databricks.pipeline.PipelineTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/pipeline#default Pipeline#default}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineClusterAutoscaleOutputReference <a name="PipelineClusterAutoscaleOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterAutoscaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMaxWorkers">ResetMaxWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMinWorkers">ResetMinWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxWorkers` <a name="ResetMaxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMaxWorkers"></a>

```csharp
private void ResetMaxWorkers()
```

##### `ResetMinWorkers` <a name="ResetMinWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMinWorkers"></a>

```csharp
private void ResetMinWorkers()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput">MaxWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput">MinWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers">MinWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxWorkersInput`<sup>Optional</sup> <a name="MaxWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkersInput"></a>

```csharp
public double MaxWorkersInput { get; }
```

- *Type:* double

---

##### `MinWorkersInput`<sup>Optional</sup> <a name="MinWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkersInput"></a>

```csharp
public double MinWorkersInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; }
```

- *Type:* double

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.minWorkers"></a>

```csharp
public double MinWorkers { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterAutoscale InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---


### PipelineClusterAwsAttributesOutputReference <a name="PipelineClusterAwsAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterAwsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount">ResetEbsVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize">ResetEbsVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent">ResetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetEbsVolumeCount` <a name="ResetEbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeCount"></a>

```csharp
private void ResetEbsVolumeCount()
```

##### `ResetEbsVolumeSize` <a name="ResetEbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeSize"></a>

```csharp
private void ResetEbsVolumeSize()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetEbsVolumeType"></a>

```csharp
private void ResetEbsVolumeType()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetFirstOnDemand"></a>

```csharp
private void ResetFirstOnDemand()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetInstanceProfileArn"></a>

```csharp
private void ResetInstanceProfileArn()
```

##### `ResetSpotBidPricePercent` <a name="ResetSpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```csharp
private void ResetSpotBidPricePercent()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.resetZoneId"></a>

```csharp
private void ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput">EbsVolumeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput">EbsVolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput">SpotBidPricePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount">EbsVolumeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize">EbsVolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `EbsVolumeCountInput`<sup>Optional</sup> <a name="EbsVolumeCountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCountInput"></a>

```csharp
public double EbsVolumeCountInput { get; }
```

- *Type:* double

---

##### `EbsVolumeSizeInput`<sup>Optional</sup> <a name="EbsVolumeSizeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSizeInput"></a>

```csharp
public double EbsVolumeSizeInput { get; }
```

- *Type:* double

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeTypeInput"></a>

```csharp
public string EbsVolumeTypeInput { get; }
```

- *Type:* string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemandInput"></a>

```csharp
public double FirstOnDemandInput { get; }
```

- *Type:* double

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArnInput"></a>

```csharp
public string InstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `SpotBidPricePercentInput`<sup>Optional</sup> <a name="SpotBidPricePercentInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```csharp
public double SpotBidPricePercentInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `EbsVolumeCount`<sup>Required</sup> <a name="EbsVolumeCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeCount"></a>

```csharp
public double EbsVolumeCount { get; }
```

- *Type:* double

---

##### `EbsVolumeSize`<sup>Required</sup> <a name="EbsVolumeSize" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeSize"></a>

```csharp
public double EbsVolumeSize { get; }
```

- *Type:* double

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.ebsVolumeType"></a>

```csharp
public string EbsVolumeType { get; }
```

- *Type:* string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.firstOnDemand"></a>

```csharp
public double FirstOnDemand { get; }
```

- *Type:* double

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; }
```

- *Type:* string

---

##### `SpotBidPricePercent`<sup>Required</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```csharp
public double SpotBidPricePercent { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterAwsAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---


### PipelineClusterAzureAttributesOutputReference <a name="PipelineClusterAzureAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterAzureAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand">ResetFirstOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice">ResetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetFirstOnDemand` <a name="ResetFirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetFirstOnDemand"></a>

```csharp
private void ResetFirstOnDemand()
```

##### `ResetSpotBidMaxPrice` <a name="ResetSpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```csharp
private void ResetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput">FirstOnDemandInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput">SpotBidMaxPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand">FirstOnDemand</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `FirstOnDemandInput`<sup>Optional</sup> <a name="FirstOnDemandInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemandInput"></a>

```csharp
public double FirstOnDemandInput { get; }
```

- *Type:* double

---

##### `SpotBidMaxPriceInput`<sup>Optional</sup> <a name="SpotBidMaxPriceInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```csharp
public double SpotBidMaxPriceInput { get; }
```

- *Type:* double

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `FirstOnDemand`<sup>Required</sup> <a name="FirstOnDemand" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.firstOnDemand"></a>

```csharp
public double FirstOnDemand { get; }
```

- *Type:* double

---

##### `SpotBidMaxPrice`<sup>Required</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```csharp
public double SpotBidMaxPrice { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterAzureAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---


### PipelineClusterClusterLogConfDbfsOutputReference <a name="PipelineClusterClusterLogConfDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterClusterLogConfDbfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterClusterLogConfDbfs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---


### PipelineClusterClusterLogConfOutputReference <a name="PipelineClusterClusterLogConfOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterClusterLogConfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs"></a>

```csharp
private void PutDbfs(PipelineClusterClusterLogConfDbfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3"></a>

```csharp
private void PutS3(PipelineClusterClusterLogConfS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetDbfs"></a>

```csharp
private void ResetDbfs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfs"></a>

```csharp
public PipelineClusterClusterLogConfDbfsOutputReference Dbfs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfsOutputReference">PipelineClusterClusterLogConfDbfsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3"></a>

```csharp
public PipelineClusterClusterLogConfS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference">PipelineClusterClusterLogConfS3OutputReference</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.dbfsInput"></a>

```csharp
public PipelineClusterClusterLogConfDbfs DbfsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfDbfs">PipelineClusterClusterLogConfDbfs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.s3Input"></a>

```csharp
public PipelineClusterClusterLogConfS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterClusterLogConf InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---


### PipelineClusterClusterLogConfS3OutputReference <a name="PipelineClusterClusterLogConfS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterClusterLogConfS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetCannedAcl"></a>

```csharp
private void ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEnableEncryption"></a>

```csharp
private void ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAclInput"></a>

```csharp
public string CannedAclInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryptionInput"></a>

```csharp
public object EnableEncryptionInput { get; }
```

- *Type:* object

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.cannedAcl"></a>

```csharp
public string CannedAcl { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.enableEncryption"></a>

```csharp
public object EnableEncryption { get; }
```

- *Type:* object

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3OutputReference.property.internalValue"></a>

```csharp
public PipelineClusterClusterLogConfS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfS3">PipelineClusterClusterLogConfS3</a>

---


### PipelineClusterGcpAttributesOutputReference <a name="PipelineClusterGcpAttributesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterGcpAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount">ResetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetLocalSsdCount">ResetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetGoogleServiceAccount` <a name="ResetGoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetGoogleServiceAccount"></a>

```csharp
private void ResetGoogleServiceAccount()
```

##### `ResetLocalSsdCount` <a name="ResetLocalSsdCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetLocalSsdCount"></a>

```csharp
private void ResetLocalSsdCount()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.resetZoneId"></a>

```csharp
private void ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccountInput"></a>

```csharp
public string GoogleServiceAccountInput { get; }
```

- *Type:* string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCountInput"></a>

```csharp
public double LocalSsdCountInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `GoogleServiceAccount`<sup>Required</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; }
```

- *Type:* string

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterGcpAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---


### PipelineClusterInitScriptsAbfssOutputReference <a name="PipelineClusterInitScriptsAbfssOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsAbfssOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterInitScriptsAbfss InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---


### PipelineClusterInitScriptsDbfsOutputReference <a name="PipelineClusterInitScriptsDbfsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsDbfsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterInitScriptsDbfs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---


### PipelineClusterInitScriptsFileOutputReference <a name="PipelineClusterInitScriptsFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterInitScriptsFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---


### PipelineClusterInitScriptsGcsOutputReference <a name="PipelineClusterInitScriptsGcsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsGcsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterInitScriptsGcs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---


### PipelineClusterInitScriptsList <a name="PipelineClusterInitScriptsList" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get"></a>

```csharp
private PipelineClusterInitScriptsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PipelineClusterInitScriptsOutputReference <a name="PipelineClusterInitScriptsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss">PutAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs">PutDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs">PutGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes">PutVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace">PutWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss">ResetAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs">ResetDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs">ResetGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetVolumes">ResetVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace">ResetWorkspace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbfss` <a name="PutAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss"></a>

```csharp
private void PutAbfss(PipelineClusterInitScriptsAbfss Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putAbfss.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---

##### `PutDbfs` <a name="PutDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs"></a>

```csharp
private void PutDbfs(PipelineClusterInitScriptsDbfs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putDbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---

##### `PutFile` <a name="PutFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile"></a>

```csharp
private void PutFile(PipelineClusterInitScriptsFile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---

##### `PutGcs` <a name="PutGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs"></a>

```csharp
private void PutGcs(PipelineClusterInitScriptsGcs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putGcs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3"></a>

```csharp
private void PutS3(PipelineClusterInitScriptsS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---

##### `PutVolumes` <a name="PutVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes"></a>

```csharp
private void PutVolumes(PipelineClusterInitScriptsVolumes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putVolumes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---

##### `PutWorkspace` <a name="PutWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace"></a>

```csharp
private void PutWorkspace(PipelineClusterInitScriptsWorkspace Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.putWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---

##### `ResetAbfss` <a name="ResetAbfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetAbfss"></a>

```csharp
private void ResetAbfss()
```

##### `ResetDbfs` <a name="ResetDbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetDbfs"></a>

```csharp
private void ResetDbfs()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetGcs` <a name="ResetGcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetGcs"></a>

```csharp
private void ResetGcs()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```

##### `ResetVolumes` <a name="ResetVolumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetVolumes"></a>

```csharp
private void ResetVolumes()
```

##### `ResetWorkspace` <a name="ResetWorkspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.resetWorkspace"></a>

```csharp
private void ResetWorkspace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss">Abfss</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs">Dbfs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs">Gcs</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumes">Volumes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference">PipelineClusterInitScriptsVolumesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace">Workspace</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput">AbfssInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput">DbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput">GcsInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumesInput">VolumesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput">WorkspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Abfss`<sup>Required</sup> <a name="Abfss" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfss"></a>

```csharp
public PipelineClusterInitScriptsAbfssOutputReference Abfss { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfssOutputReference">PipelineClusterInitScriptsAbfssOutputReference</a>

---

##### `Dbfs`<sup>Required</sup> <a name="Dbfs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfs"></a>

```csharp
public PipelineClusterInitScriptsDbfsOutputReference Dbfs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfsOutputReference">PipelineClusterInitScriptsDbfsOutputReference</a>

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.file"></a>

```csharp
public PipelineClusterInitScriptsFileOutputReference File { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFileOutputReference">PipelineClusterInitScriptsFileOutputReference</a>

---

##### `Gcs`<sup>Required</sup> <a name="Gcs" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcs"></a>

```csharp
public PipelineClusterInitScriptsGcsOutputReference Gcs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcsOutputReference">PipelineClusterInitScriptsGcsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3"></a>

```csharp
public PipelineClusterInitScriptsS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference">PipelineClusterInitScriptsS3OutputReference</a>

---

##### `Volumes`<sup>Required</sup> <a name="Volumes" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumes"></a>

```csharp
public PipelineClusterInitScriptsVolumesOutputReference Volumes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference">PipelineClusterInitScriptsVolumesOutputReference</a>

---

##### `Workspace`<sup>Required</sup> <a name="Workspace" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspace"></a>

```csharp
public PipelineClusterInitScriptsWorkspaceOutputReference Workspace { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference">PipelineClusterInitScriptsWorkspaceOutputReference</a>

---

##### `AbfssInput`<sup>Optional</sup> <a name="AbfssInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.abfssInput"></a>

```csharp
public PipelineClusterInitScriptsAbfss AbfssInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsAbfss">PipelineClusterInitScriptsAbfss</a>

---

##### `DbfsInput`<sup>Optional</sup> <a name="DbfsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.dbfsInput"></a>

```csharp
public PipelineClusterInitScriptsDbfs DbfsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsDbfs">PipelineClusterInitScriptsDbfs</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.fileInput"></a>

```csharp
public PipelineClusterInitScriptsFile FileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsFile">PipelineClusterInitScriptsFile</a>

---

##### `GcsInput`<sup>Optional</sup> <a name="GcsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.gcsInput"></a>

```csharp
public PipelineClusterInitScriptsGcs GcsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsGcs">PipelineClusterInitScriptsGcs</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.s3Input"></a>

```csharp
public PipelineClusterInitScriptsS3 S3Input { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---

##### `VolumesInput`<sup>Optional</sup> <a name="VolumesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.volumesInput"></a>

```csharp
public PipelineClusterInitScriptsVolumes VolumesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---

##### `WorkspaceInput`<sup>Optional</sup> <a name="WorkspaceInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.workspaceInput"></a>

```csharp
public PipelineClusterInitScriptsWorkspace WorkspaceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PipelineClusterInitScriptsS3OutputReference <a name="PipelineClusterInitScriptsS3OutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl">ResetCannedAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption">ResetEnableEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCannedAcl` <a name="ResetCannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetCannedAcl"></a>

```csharp
private void ResetCannedAcl()
```

##### `ResetEnableEncryption` <a name="ResetEnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEnableEncryption"></a>

```csharp
private void ResetEnableEncryption()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput">CannedAclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput">EnableEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl">CannedAcl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption">EnableEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CannedAclInput`<sup>Optional</sup> <a name="CannedAclInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAclInput"></a>

```csharp
public string CannedAclInput { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `EnableEncryptionInput`<sup>Optional</sup> <a name="EnableEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryptionInput"></a>

```csharp
public object EnableEncryptionInput { get; }
```

- *Type:* object

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CannedAcl`<sup>Required</sup> <a name="CannedAcl" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.cannedAcl"></a>

```csharp
public string CannedAcl { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `EnableEncryption`<sup>Required</sup> <a name="EnableEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.enableEncryption"></a>

```csharp
public object EnableEncryption { get; }
```

- *Type:* object

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3OutputReference.property.internalValue"></a>

```csharp
public PipelineClusterInitScriptsS3 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsS3">PipelineClusterInitScriptsS3</a>

---


### PipelineClusterInitScriptsVolumesOutputReference <a name="PipelineClusterInitScriptsVolumesOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsVolumesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumesOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterInitScriptsVolumes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsVolumes">PipelineClusterInitScriptsVolumes</a>

---


### PipelineClusterInitScriptsWorkspaceOutputReference <a name="PipelineClusterInitScriptsWorkspaceOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterInitScriptsWorkspaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspaceOutputReference.property.internalValue"></a>

```csharp
public PipelineClusterInitScriptsWorkspace InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsWorkspace">PipelineClusterInitScriptsWorkspace</a>

---


### PipelineClusterList <a name="PipelineClusterList" id="@cdktf/provider-databricks.pipeline.PipelineClusterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get"></a>

```csharp
private PipelineClusterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PipelineClusterOutputReference <a name="PipelineClusterOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineClusterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale">PutAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes">PutAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes">PutAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf">PutClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes">PutGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts">PutInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues">ResetApplyPolicyDefaultValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale">ResetAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes">ResetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes">ResetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf">ResetClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId">ResetDriverInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId">ResetDriverNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption">ResetEnableLocalDiskEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes">ResetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts">ResetInitScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId">ResetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers">ResetNumWorkers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf">ResetSparkConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars">ResetSparkEnvVars</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys">ResetSshPublicKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoscale` <a name="PutAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale"></a>

```csharp
private void PutAutoscale(PipelineClusterAutoscale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAutoscale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---

##### `PutAwsAttributes` <a name="PutAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes"></a>

```csharp
private void PutAwsAttributes(PipelineClusterAwsAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---

##### `PutAzureAttributes` <a name="PutAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes"></a>

```csharp
private void PutAzureAttributes(PipelineClusterAzureAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---

##### `PutClusterLogConf` <a name="PutClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf"></a>

```csharp
private void PutClusterLogConf(PipelineClusterClusterLogConf Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putClusterLogConf.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---

##### `PutGcpAttributes` <a name="PutGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes"></a>

```csharp
private void PutGcpAttributes(PipelineClusterGcpAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---

##### `PutInitScripts` <a name="PutInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts"></a>

```csharp
private void PutInitScripts(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.putInitScripts.parameter.value"></a>

- *Type:* object

---

##### `ResetApplyPolicyDefaultValues` <a name="ResetApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetApplyPolicyDefaultValues"></a>

```csharp
private void ResetApplyPolicyDefaultValues()
```

##### `ResetAutoscale` <a name="ResetAutoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAutoscale"></a>

```csharp
private void ResetAutoscale()
```

##### `ResetAwsAttributes` <a name="ResetAwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAwsAttributes"></a>

```csharp
private void ResetAwsAttributes()
```

##### `ResetAzureAttributes` <a name="ResetAzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetAzureAttributes"></a>

```csharp
private void ResetAzureAttributes()
```

##### `ResetClusterLogConf` <a name="ResetClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetClusterLogConf"></a>

```csharp
private void ResetClusterLogConf()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetDriverInstancePoolId` <a name="ResetDriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverInstancePoolId"></a>

```csharp
private void ResetDriverInstancePoolId()
```

##### `ResetDriverNodeTypeId` <a name="ResetDriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetDriverNodeTypeId"></a>

```csharp
private void ResetDriverNodeTypeId()
```

##### `ResetEnableLocalDiskEncryption` <a name="ResetEnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetEnableLocalDiskEncryption"></a>

```csharp
private void ResetEnableLocalDiskEncryption()
```

##### `ResetGcpAttributes` <a name="ResetGcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetGcpAttributes"></a>

```csharp
private void ResetGcpAttributes()
```

##### `ResetInitScripts` <a name="ResetInitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInitScripts"></a>

```csharp
private void ResetInitScripts()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetInstancePoolId"></a>

```csharp
private void ResetInstancePoolId()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetNodeTypeId` <a name="ResetNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNodeTypeId"></a>

```csharp
private void ResetNodeTypeId()
```

##### `ResetNumWorkers` <a name="ResetNumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetNumWorkers"></a>

```csharp
private void ResetNumWorkers()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetSparkConf` <a name="ResetSparkConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkConf"></a>

```csharp
private void ResetSparkConf()
```

##### `ResetSparkEnvVars` <a name="ResetSparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSparkEnvVars"></a>

```csharp
private void ResetSparkEnvVars()
```

##### `ResetSshPublicKeys` <a name="ResetSshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.resetSshPublicKeys"></a>

```csharp
private void ResetSshPublicKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale">Autoscale</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf">ClusterLogConf</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts">InitScripts</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput">ApplyPolicyDefaultValuesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput">AutoscaleInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput">AwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput">AzureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput">ClusterLogConfInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput">DriverInstancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput">DriverNodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput">EnableLocalDiskEncryptionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput">GcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput">InitScriptsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput">NumWorkersInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput">SparkConfInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput">SparkEnvVarsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput">SshPublicKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues">ApplyPolicyDefaultValues</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId">DriverInstancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId">DriverNodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption">EnableLocalDiskEncryption</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers">NumWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf">SparkConf</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars">SparkEnvVars</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys">SshPublicKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Autoscale`<sup>Required</sup> <a name="Autoscale" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscale"></a>

```csharp
public PipelineClusterAutoscaleOutputReference Autoscale { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscaleOutputReference">PipelineClusterAutoscaleOutputReference</a>

---

##### `AwsAttributes`<sup>Required</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributes"></a>

```csharp
public PipelineClusterAwsAttributesOutputReference AwsAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributesOutputReference">PipelineClusterAwsAttributesOutputReference</a>

---

##### `AzureAttributes`<sup>Required</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributes"></a>

```csharp
public PipelineClusterAzureAttributesOutputReference AzureAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributesOutputReference">PipelineClusterAzureAttributesOutputReference</a>

---

##### `ClusterLogConf`<sup>Required</sup> <a name="ClusterLogConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConf"></a>

```csharp
public PipelineClusterClusterLogConfOutputReference ClusterLogConf { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConfOutputReference">PipelineClusterClusterLogConfOutputReference</a>

---

##### `GcpAttributes`<sup>Required</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributes"></a>

```csharp
public PipelineClusterGcpAttributesOutputReference GcpAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributesOutputReference">PipelineClusterGcpAttributesOutputReference</a>

---

##### `InitScripts`<sup>Required</sup> <a name="InitScripts" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScripts"></a>

```csharp
public PipelineClusterInitScriptsList InitScripts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterInitScriptsList">PipelineClusterInitScriptsList</a>

---

##### `ApplyPolicyDefaultValuesInput`<sup>Optional</sup> <a name="ApplyPolicyDefaultValuesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValuesInput"></a>

```csharp
public object ApplyPolicyDefaultValuesInput { get; }
```

- *Type:* object

---

##### `AutoscaleInput`<sup>Optional</sup> <a name="AutoscaleInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.autoscaleInput"></a>

```csharp
public PipelineClusterAutoscale AutoscaleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAutoscale">PipelineClusterAutoscale</a>

---

##### `AwsAttributesInput`<sup>Optional</sup> <a name="AwsAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.awsAttributesInput"></a>

```csharp
public PipelineClusterAwsAttributes AwsAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAwsAttributes">PipelineClusterAwsAttributes</a>

---

##### `AzureAttributesInput`<sup>Optional</sup> <a name="AzureAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.azureAttributesInput"></a>

```csharp
public PipelineClusterAzureAttributes AzureAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterAzureAttributes">PipelineClusterAzureAttributes</a>

---

##### `ClusterLogConfInput`<sup>Optional</sup> <a name="ClusterLogConfInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.clusterLogConfInput"></a>

```csharp
public PipelineClusterClusterLogConf ClusterLogConfInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterClusterLogConf">PipelineClusterClusterLogConf</a>

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverInstancePoolIdInput`<sup>Optional</sup> <a name="DriverInstancePoolIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolIdInput"></a>

```csharp
public string DriverInstancePoolIdInput { get; }
```

- *Type:* string

---

##### `DriverNodeTypeIdInput`<sup>Optional</sup> <a name="DriverNodeTypeIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeIdInput"></a>

```csharp
public string DriverNodeTypeIdInput { get; }
```

- *Type:* string

---

##### `EnableLocalDiskEncryptionInput`<sup>Optional</sup> <a name="EnableLocalDiskEncryptionInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryptionInput"></a>

```csharp
public object EnableLocalDiskEncryptionInput { get; }
```

- *Type:* object

---

##### `GcpAttributesInput`<sup>Optional</sup> <a name="GcpAttributesInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.gcpAttributesInput"></a>

```csharp
public PipelineClusterGcpAttributes GcpAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineClusterGcpAttributes">PipelineClusterGcpAttributes</a>

---

##### `InitScriptsInput`<sup>Optional</sup> <a name="InitScriptsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.initScriptsInput"></a>

```csharp
public object InitScriptsInput { get; }
```

- *Type:* object

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolIdInput"></a>

```csharp
public string InstancePoolIdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeIdInput"></a>

```csharp
public string NodeTypeIdInput { get; }
```

- *Type:* string

---

##### `NumWorkersInput`<sup>Optional</sup> <a name="NumWorkersInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkersInput"></a>

```csharp
public double NumWorkersInput { get; }
```

- *Type:* double

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `SparkConfInput`<sup>Optional</sup> <a name="SparkConfInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConfInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkConfInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkEnvVarsInput`<sup>Optional</sup> <a name="SparkEnvVarsInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVarsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkEnvVarsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SshPublicKeysInput`<sup>Optional</sup> <a name="SshPublicKeysInput" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeysInput"></a>

```csharp
public string[] SshPublicKeysInput { get; }
```

- *Type:* string[]

---

##### `ApplyPolicyDefaultValues`<sup>Required</sup> <a name="ApplyPolicyDefaultValues" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.applyPolicyDefaultValues"></a>

```csharp
public object ApplyPolicyDefaultValues { get; }
```

- *Type:* object

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DriverInstancePoolId`<sup>Required</sup> <a name="DriverInstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverInstancePoolId"></a>

```csharp
public string DriverInstancePoolId { get; }
```

- *Type:* string

---

##### `DriverNodeTypeId`<sup>Required</sup> <a name="DriverNodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.driverNodeTypeId"></a>

```csharp
public string DriverNodeTypeId { get; }
```

- *Type:* string

---

##### `EnableLocalDiskEncryption`<sup>Required</sup> <a name="EnableLocalDiskEncryption" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.enableLocalDiskEncryption"></a>

```csharp
public object EnableLocalDiskEncryption { get; }
```

- *Type:* object

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; }
```

- *Type:* string

---

##### `NumWorkers`<sup>Required</sup> <a name="NumWorkers" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.numWorkers"></a>

```csharp
public double NumWorkers { get; }
```

- *Type:* double

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `SparkConf`<sup>Required</sup> <a name="SparkConf" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkConf"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkConf { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SparkEnvVars`<sup>Required</sup> <a name="SparkEnvVars" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sparkEnvVars"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SparkEnvVars { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SshPublicKeys`<sup>Required</sup> <a name="SshPublicKeys" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.sshPublicKeys"></a>

```csharp
public string[] SshPublicKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineClusterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PipelineFiltersOutputReference <a name="PipelineFiltersOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput">IncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude">Exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.excludeInput"></a>

```csharp
public string[] ExcludeInput { get; }
```

- *Type:* string[]

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.includeInput"></a>

```csharp
public string[] IncludeInput { get; }
```

- *Type:* string[]

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.exclude"></a>

```csharp
public string[] Exclude { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineFiltersOutputReference.property.internalValue"></a>

```csharp
public PipelineFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineFilters">PipelineFilters</a>

---


### PipelineLibraryFileOutputReference <a name="PipelineLibraryFileOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineLibraryFileOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference.property.internalValue"></a>

```csharp
public PipelineLibraryFile InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---


### PipelineLibraryList <a name="PipelineLibraryList" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineLibraryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get"></a>

```csharp
private PipelineLibraryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PipelineLibraryMavenOutputReference <a name="PipelineLibraryMavenOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineLibraryMavenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinatesInput"></a>

```csharp
public string CoordinatesInput { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.coordinates"></a>

```csharp
public string Coordinates { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference.property.internalValue"></a>

```csharp
public PipelineLibraryMaven InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---


### PipelineLibraryNotebookOutputReference <a name="PipelineLibraryNotebookOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineLibraryNotebookOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference.property.internalValue"></a>

```csharp
public PipelineLibraryNotebook InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---


### PipelineLibraryOutputReference <a name="PipelineLibraryOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineLibraryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile">PutFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook">PutNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook">ResetNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFile` <a name="PutFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile"></a>

```csharp
private void PutFile(PipelineLibraryFile Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---

##### `PutMaven` <a name="PutMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven"></a>

```csharp
private void PutMaven(PipelineLibraryMaven Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putMaven.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---

##### `PutNotebook` <a name="PutNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook"></a>

```csharp
private void PutNotebook(PipelineLibraryNotebook Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.putNotebook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetJar"></a>

```csharp
private void ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetMaven"></a>

```csharp
private void ResetMaven()
```

##### `ResetNotebook` <a name="ResetNotebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetNotebook"></a>

```csharp
private void ResetNotebook()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.resetWhl"></a>

```csharp
private void ResetWhl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file">File</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook">Notebook</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput">FileInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput">JarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput">MavenInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput">NotebookInput</a></code> | <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput">WhlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar">Jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl">Whl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.file"></a>

```csharp
public PipelineLibraryFileOutputReference File { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFileOutputReference">PipelineLibraryFileOutputReference</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.maven"></a>

```csharp
public PipelineLibraryMavenOutputReference Maven { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMavenOutputReference">PipelineLibraryMavenOutputReference</a>

---

##### `Notebook`<sup>Required</sup> <a name="Notebook" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebook"></a>

```csharp
public PipelineLibraryNotebookOutputReference Notebook { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebookOutputReference">PipelineLibraryNotebookOutputReference</a>

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.fileInput"></a>

```csharp
public PipelineLibraryFile FileInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryFile">PipelineLibraryFile</a>

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jarInput"></a>

```csharp
public string JarInput { get; }
```

- *Type:* string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.mavenInput"></a>

```csharp
public PipelineLibraryMaven MavenInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryMaven">PipelineLibraryMaven</a>

---

##### `NotebookInput`<sup>Optional</sup> <a name="NotebookInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.notebookInput"></a>

```csharp
public PipelineLibraryNotebook NotebookInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.pipeline.PipelineLibraryNotebook">PipelineLibraryNotebook</a>

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whlInput"></a>

```csharp
public string WhlInput { get; }
```

- *Type:* string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.jar"></a>

```csharp
public string Jar { get; }
```

- *Type:* string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.whl"></a>

```csharp
public string Whl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineLibraryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PipelineNotificationList <a name="PipelineNotificationList" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineNotificationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get"></a>

```csharp
private PipelineNotificationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineNotificationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PipelineNotificationOutputReference <a name="PipelineNotificationOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput">AlertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput">EmailRecipientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts">Alerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients">EmailRecipients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlertsInput`<sup>Optional</sup> <a name="AlertsInput" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alertsInput"></a>

```csharp
public string[] AlertsInput { get; }
```

- *Type:* string[]

---

##### `EmailRecipientsInput`<sup>Optional</sup> <a name="EmailRecipientsInput" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipientsInput"></a>

```csharp
public string[] EmailRecipientsInput { get; }
```

- *Type:* string[]

---

##### `Alerts`<sup>Required</sup> <a name="Alerts" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.alerts"></a>

```csharp
public string[] Alerts { get; }
```

- *Type:* string[]

---

##### `EmailRecipients`<sup>Required</sup> <a name="EmailRecipients" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.emailRecipients"></a>

```csharp
public string[] EmailRecipients { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineNotificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PipelineTimeoutsOutputReference <a name="PipelineTimeoutsOutputReference" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new PipelineTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.pipeline.PipelineTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



