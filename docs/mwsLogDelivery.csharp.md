# `mwsLogDelivery` Submodule <a name="`mwsLogDelivery` Submodule" id="@cdktf/provider-databricks.mwsLogDelivery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsLogDelivery <a name="MwsLogDelivery" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery databricks_mws_log_delivery}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsLogDelivery(Construct Scope, string Id, MwsLogDeliveryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig">MwsLogDeliveryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig">MwsLogDeliveryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigId">ResetConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigName">ResetConfigName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryPathPrefix">ResetDeliveryPathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryStartTime">ResetDeliveryStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetWorkspaceIdsFilter">ResetWorkspaceIdsFilter</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetConfigId` <a name="ResetConfigId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigId"></a>

```csharp
private void ResetConfigId()
```

##### `ResetConfigName` <a name="ResetConfigName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetConfigName"></a>

```csharp
private void ResetConfigName()
```

##### `ResetDeliveryPathPrefix` <a name="ResetDeliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryPathPrefix"></a>

```csharp
private void ResetDeliveryPathPrefix()
```

##### `ResetDeliveryStartTime` <a name="ResetDeliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetDeliveryStartTime"></a>

```csharp
private void ResetDeliveryStartTime()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetWorkspaceIdsFilter` <a name="ResetWorkspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.resetWorkspaceIdsFilter"></a>

```csharp
private void ResetWorkspaceIdsFilter()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MwsLogDelivery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsLogDelivery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsLogDelivery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsLogDelivery.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsLogDelivery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MwsLogDelivery resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsLogDelivery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsLogDelivery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MwsLogDelivery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configIdInput">ConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configNameInput">ConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsIdInput">CredentialsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefixInput">DeliveryPathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTimeInput">DeliveryStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationIdInput">StorageConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilterInput">WorkspaceIdsFilterInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configId">ConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configName">ConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsId">CredentialsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefix">DeliveryPathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTime">DeliveryStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationId">StorageConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilter">WorkspaceIdsFilter</a></code> | <code>double[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigIdInput`<sup>Optional</sup> <a name="ConfigIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configIdInput"></a>

```csharp
public string ConfigIdInput { get; }
```

- *Type:* string

---

##### `ConfigNameInput`<sup>Optional</sup> <a name="ConfigNameInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configNameInput"></a>

```csharp
public string ConfigNameInput { get; }
```

- *Type:* string

---

##### `CredentialsIdInput`<sup>Optional</sup> <a name="CredentialsIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsIdInput"></a>

```csharp
public string CredentialsIdInput { get; }
```

- *Type:* string

---

##### `DeliveryPathPrefixInput`<sup>Optional</sup> <a name="DeliveryPathPrefixInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefixInput"></a>

```csharp
public string DeliveryPathPrefixInput { get; }
```

- *Type:* string

---

##### `DeliveryStartTimeInput`<sup>Optional</sup> <a name="DeliveryStartTimeInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTimeInput"></a>

```csharp
public string DeliveryStartTimeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StorageConfigurationIdInput`<sup>Optional</sup> <a name="StorageConfigurationIdInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationIdInput"></a>

```csharp
public string StorageConfigurationIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdsFilterInput`<sup>Optional</sup> <a name="WorkspaceIdsFilterInput" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilterInput"></a>

```csharp
public double[] WorkspaceIdsFilterInput { get; }
```

- *Type:* double[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configId"></a>

```csharp
public string ConfigId { get; }
```

- *Type:* string

---

##### `ConfigName`<sup>Required</sup> <a name="ConfigName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.configName"></a>

```csharp
public string ConfigName { get; }
```

- *Type:* string

---

##### `CredentialsId`<sup>Required</sup> <a name="CredentialsId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.credentialsId"></a>

```csharp
public string CredentialsId { get; }
```

- *Type:* string

---

##### `DeliveryPathPrefix`<sup>Required</sup> <a name="DeliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryPathPrefix"></a>

```csharp
public string DeliveryPathPrefix { get; }
```

- *Type:* string

---

##### `DeliveryStartTime`<sup>Required</sup> <a name="DeliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.deliveryStartTime"></a>

```csharp
public string DeliveryStartTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageConfigurationId`<sup>Required</sup> <a name="StorageConfigurationId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.storageConfigurationId"></a>

```csharp
public string StorageConfigurationId { get; }
```

- *Type:* string

---

##### `WorkspaceIdsFilter`<sup>Required</sup> <a name="WorkspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.workspaceIdsFilter"></a>

```csharp
public double[] WorkspaceIdsFilter { get; }
```

- *Type:* double[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDelivery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsLogDeliveryConfig <a name="MwsLogDeliveryConfig" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsLogDeliveryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string CredentialsId,
    string LogType,
    string OutputFormat,
    string StorageConfigurationId,
    string ConfigId = null,
    string ConfigName = null,
    string DeliveryPathPrefix = null,
    string DeliveryStartTime = null,
    string Id = null,
    string Status = null,
    double[] WorkspaceIdsFilter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.credentialsId">CredentialsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.logType">LogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.outputFormat">OutputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.storageConfigurationId">StorageConfigurationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configId">ConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configName">ConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryPathPrefix">DeliveryPathPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryStartTime">DeliveryStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#id MwsLogDelivery#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#status MwsLogDelivery#status}. |
| <code><a href="#@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.workspaceIdsFilter">WorkspaceIdsFilter</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#account_id MwsLogDelivery#account_id}.

---

##### `CredentialsId`<sup>Required</sup> <a name="CredentialsId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.credentialsId"></a>

```csharp
public string CredentialsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#credentials_id MwsLogDelivery#credentials_id}.

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#log_type MwsLogDelivery#log_type}.

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#output_format MwsLogDelivery#output_format}.

---

##### `StorageConfigurationId`<sup>Required</sup> <a name="StorageConfigurationId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.storageConfigurationId"></a>

```csharp
public string StorageConfigurationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#storage_configuration_id MwsLogDelivery#storage_configuration_id}.

---

##### `ConfigId`<sup>Optional</sup> <a name="ConfigId" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configId"></a>

```csharp
public string ConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#config_id MwsLogDelivery#config_id}.

---

##### `ConfigName`<sup>Optional</sup> <a name="ConfigName" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.configName"></a>

```csharp
public string ConfigName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#config_name MwsLogDelivery#config_name}.

---

##### `DeliveryPathPrefix`<sup>Optional</sup> <a name="DeliveryPathPrefix" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryPathPrefix"></a>

```csharp
public string DeliveryPathPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#delivery_path_prefix MwsLogDelivery#delivery_path_prefix}.

---

##### `DeliveryStartTime`<sup>Optional</sup> <a name="DeliveryStartTime" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.deliveryStartTime"></a>

```csharp
public string DeliveryStartTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#delivery_start_time MwsLogDelivery#delivery_start_time}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#id MwsLogDelivery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#status MwsLogDelivery#status}.

---

##### `WorkspaceIdsFilter`<sup>Optional</sup> <a name="WorkspaceIdsFilter" id="@cdktf/provider-databricks.mwsLogDelivery.MwsLogDeliveryConfig.property.workspaceIdsFilter"></a>

```csharp
public double[] WorkspaceIdsFilter { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.36.1/docs/resources/mws_log_delivery#workspace_ids_filter MwsLogDelivery#workspace_ids_filter}.

---



