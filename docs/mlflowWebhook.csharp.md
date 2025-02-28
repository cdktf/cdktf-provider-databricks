# `mlflowWebhook` Submodule <a name="`mlflowWebhook` Submodule" id="@cdktf/provider-databricks.mlflowWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlflowWebhook <a name="MlflowWebhook" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook databricks_mlflow_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MlflowWebhook(Construct Scope, string Id, MlflowWebhookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig">MlflowWebhookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig">MlflowWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec">PutHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec">ResetHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec">ResetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHttpUrlSpec` <a name="PutHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec"></a>

```csharp
private void PutHttpUrlSpec(MlflowWebhookHttpUrlSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec"></a>

```csharp
private void PutJobSpec(MlflowWebhookJobSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHttpUrlSpec` <a name="ResetHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec"></a>

```csharp
private void ResetHttpUrlSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetJobSpec` <a name="ResetJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec"></a>

```csharp
private void ResetJobSpec()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName"></a>

```csharp
private void ResetModelName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MlflowWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MlflowWebhook.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MlflowWebhook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MlflowWebhook.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MlflowWebhook.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MlflowWebhook resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MlflowWebhook to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MlflowWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MlflowWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec">HttpUrlSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput">HttpUrlSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput">JobSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HttpUrlSpec`<sup>Required</sup> <a name="HttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec"></a>

```csharp
public MlflowWebhookHttpUrlSpecOutputReference HttpUrlSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a>

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec"></a>

```csharp
public MlflowWebhookJobSpecOutputReference JobSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `HttpUrlSpecInput`<sup>Optional</sup> <a name="HttpUrlSpecInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput"></a>

```csharp
public MlflowWebhookHttpUrlSpec HttpUrlSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput"></a>

```csharp
public MlflowWebhookJobSpec JobSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MlflowWebhookConfig <a name="MlflowWebhookConfig" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MlflowWebhookConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Events,
    string Description = null,
    MlflowWebhookHttpUrlSpec HttpUrlSpec = null,
    string Id = null,
    MlflowWebhookJobSpec JobSpec = null,
    string ModelName = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec">HttpUrlSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | http_url_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName">ModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}.

---

##### `HttpUrlSpec`<sup>Optional</sup> <a name="HttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec"></a>

```csharp
public MlflowWebhookHttpUrlSpec HttpUrlSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

http_url_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#http_url_spec MlflowWebhook#http_url_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobSpec`<sup>Optional</sup> <a name="JobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec"></a>

```csharp
public MlflowWebhookJobSpec JobSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#job_spec MlflowWebhook#job_spec}

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}.

---

### MlflowWebhookHttpUrlSpec <a name="MlflowWebhookHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MlflowWebhookHttpUrlSpec {
    string Url,
    string Authorization = null,
    object EnableSslVerification = null,
    string Secret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization">Authorization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification">EnableSslVerification</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization"></a>

```csharp
public string Authorization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}.

---

##### `EnableSslVerification`<sup>Optional</sup> <a name="EnableSslVerification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification"></a>

```csharp
public object EnableSslVerification { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}.

---

### MlflowWebhookJobSpec <a name="MlflowWebhookJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MlflowWebhookJobSpec {
    string AccessToken,
    string JobId,
    string WorkspaceUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId">JobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl">WorkspaceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}. |

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}.

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId"></a>

```csharp
public string JobId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}.

---

##### `WorkspaceUrl`<sup>Optional</sup> <a name="WorkspaceUrl" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl"></a>

```csharp
public string WorkspaceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.68.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### MlflowWebhookHttpUrlSpecOutputReference <a name="MlflowWebhookHttpUrlSpecOutputReference" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MlflowWebhookHttpUrlSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification">ResetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization"></a>

```csharp
private void ResetAuthorization()
```

##### `ResetEnableSslVerification` <a name="ResetEnableSslVerification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification"></a>

```csharp
private void ResetEnableSslVerification()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput">EnableSslVerificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization">Authorization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification">EnableSslVerification</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput"></a>

```csharp
public string AuthorizationInput { get; }
```

- *Type:* string

---

##### `EnableSslVerificationInput`<sup>Optional</sup> <a name="EnableSslVerificationInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput"></a>

```csharp
public object EnableSslVerificationInput { get; }
```

- *Type:* object

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization"></a>

```csharp
public string Authorization { get; }
```

- *Type:* string

---

##### `EnableSslVerification`<sup>Required</sup> <a name="EnableSslVerification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification"></a>

```csharp
public object EnableSslVerification { get; }
```

- *Type:* object

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue"></a>

```csharp
public MlflowWebhookHttpUrlSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---


### MlflowWebhookJobSpecOutputReference <a name="MlflowWebhookJobSpecOutputReference" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MlflowWebhookJobSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl">ResetWorkspaceUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceUrl` <a name="ResetWorkspaceUrl" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl"></a>

```csharp
private void ResetWorkspaceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput">JobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput">WorkspaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId">JobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl">WorkspaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput"></a>

```csharp
public string JobIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceUrlInput`<sup>Optional</sup> <a name="WorkspaceUrlInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput"></a>

```csharp
public string WorkspaceUrlInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId"></a>

```csharp
public string JobId { get; }
```

- *Type:* string

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl"></a>

```csharp
public string WorkspaceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue"></a>

```csharp
public MlflowWebhookJobSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---



