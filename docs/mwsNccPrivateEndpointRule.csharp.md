# `mwsNccPrivateEndpointRule` Submodule <a name="`mwsNccPrivateEndpointRule` Submodule" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNccPrivateEndpointRule <a name="MwsNccPrivateEndpointRule" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNccPrivateEndpointRule(Construct Scope, string Id, MwsNccPrivateEndpointRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetConnectionState">ResetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivated">ResetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivatedAt">ResetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetConnectionState` <a name="ResetConnectionState" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetConnectionState"></a>

```csharp
private void ResetConnectionState()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetDeactivated` <a name="ResetDeactivated" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivated"></a>

```csharp
private void ResetDeactivated()
```

##### `ResetDeactivatedAt` <a name="ResetDeactivatedAt" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivatedAt"></a>

```csharp
private void ResetDeactivatedAt()
```

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointName"></a>

```csharp
private void ResetEndpointName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetRuleId"></a>

```csharp
private void ResetRuleId()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetUpdatedTime"></a>

```csharp
private void ResetUpdatedTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MwsNccPrivateEndpointRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNccPrivateEndpointRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNccPrivateEndpointRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNccPrivateEndpointRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNccPrivateEndpointRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MwsNccPrivateEndpointRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsNccPrivateEndpointRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsNccPrivateEndpointRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MwsNccPrivateEndpointRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionStateInput">ConnectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTimeInput">CreationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAtInput">DeactivatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedInput">DeactivatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated">Deactivated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt">DeactivatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime">UpdatedTime</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConnectionStateInput`<sup>Optional</sup> <a name="ConnectionStateInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionStateInput"></a>

```csharp
public string ConnectionStateInput { get; }
```

- *Type:* string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTimeInput"></a>

```csharp
public double CreationTimeInput { get; }
```

- *Type:* double

---

##### `DeactivatedAtInput`<sup>Optional</sup> <a name="DeactivatedAtInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAtInput"></a>

```csharp
public double DeactivatedAtInput { get; }
```

- *Type:* double

---

##### `DeactivatedInput`<sup>Optional</sup> <a name="DeactivatedInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedInput"></a>

```csharp
public object DeactivatedInput { get; }
```

- *Type:* object

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput"></a>

```csharp
public string NetworkConnectivityConfigIdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTimeInput"></a>

```csharp
public double UpdatedTimeInput { get; }
```

- *Type:* double

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated"></a>

```csharp
public object Deactivated { get; }
```

- *Type:* object

---

##### `DeactivatedAt`<sup>Required</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt"></a>

```csharp
public double DeactivatedAt { get; }
```

- *Type:* double

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime"></a>

```csharp
public double UpdatedTime { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNccPrivateEndpointRuleConfig <a name="MwsNccPrivateEndpointRuleConfig" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNccPrivateEndpointRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GroupId,
    string NetworkConnectivityConfigId,
    string ResourceId,
    string ConnectionState = null,
    double CreationTime = null,
    object Deactivated = null,
    double DeactivatedAt = null,
    string EndpointName = null,
    string Id = null,
    string RuleId = null,
    double UpdatedTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connectionState">ConnectionState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#connection_state MwsNccPrivateEndpointRule#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.creationTime">CreationTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#creation_time MwsNccPrivateEndpointRule#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivated">Deactivated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated MwsNccPrivateEndpointRule#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivatedAt">DeactivatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated_at MwsNccPrivateEndpointRule#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointName">EndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_name MwsNccPrivateEndpointRule#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.ruleId">RuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#rule_id MwsNccPrivateEndpointRule#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.updatedTime">UpdatedTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#updated_time MwsNccPrivateEndpointRule#updated_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}.

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}.

---

##### `ConnectionState`<sup>Optional</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connectionState"></a>

```csharp
public string ConnectionState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#connection_state MwsNccPrivateEndpointRule#connection_state}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.creationTime"></a>

```csharp
public double CreationTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#creation_time MwsNccPrivateEndpointRule#creation_time}.

---

##### `Deactivated`<sup>Optional</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivated"></a>

```csharp
public object Deactivated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated MwsNccPrivateEndpointRule#deactivated}.

---

##### `DeactivatedAt`<sup>Optional</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivatedAt"></a>

```csharp
public double DeactivatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated_at MwsNccPrivateEndpointRule#deactivated_at}.

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_name MwsNccPrivateEndpointRule#endpoint_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#rule_id MwsNccPrivateEndpointRule#rule_id}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.updatedTime"></a>

```csharp
public double UpdatedTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.74.0/docs/resources/mws_ncc_private_endpoint_rule#updated_time MwsNccPrivateEndpointRule#updated_time}.

---



