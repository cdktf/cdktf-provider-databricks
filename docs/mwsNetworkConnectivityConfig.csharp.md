# `mwsNetworkConnectivityConfig` Submodule <a name="`mwsNetworkConnectivityConfig` Submodule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNetworkConnectivityConfig <a name="MwsNetworkConnectivityConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config databricks_mws_network_connectivity_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfig(Construct Scope, string Id, MwsNetworkConnectivityConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig">MwsNetworkConnectivityConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig">MwsNetworkConnectivityConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.putEgressConfig">PutEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetEgressConfig">ResetEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId">ResetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressConfig` <a name="PutEgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.putEgressConfig"></a>

```csharp
private void PutEgressConfig(MwsNetworkConnectivityConfigEgressConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.putEgressConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetEgressConfig` <a name="ResetEgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetEgressConfig"></a>

```csharp
private void ResetEgressConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworkConnectivityConfigId` <a name="ResetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetNetworkConnectivityConfigId"></a>

```csharp
private void ResetNetworkConnectivityConfigId()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.resetUpdatedTime"></a>

```csharp
private void ResetUpdatedTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNetworkConnectivityConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNetworkConnectivityConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNetworkConnectivityConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsNetworkConnectivityConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MwsNetworkConnectivityConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MwsNetworkConnectivityConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MwsNetworkConnectivityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MwsNetworkConnectivityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.egressConfig">EgressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference">MwsNetworkConnectivityConfigEgressConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.creationTimeInput">CreationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.egressConfigInput">EgressConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.updatedTime">UpdatedTime</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EgressConfig`<sup>Required</sup> <a name="EgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.egressConfig"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigOutputReference EgressConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference">MwsNetworkConnectivityConfigEgressConfigOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.creationTimeInput"></a>

```csharp
public double CreationTimeInput { get; }
```

- *Type:* double

---

##### `EgressConfigInput`<sup>Optional</sup> <a name="EgressConfigInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.egressConfigInput"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfig EgressConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.networkConnectivityConfigIdInput"></a>

```csharp
public string NetworkConnectivityConfigIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.updatedTimeInput"></a>

```csharp
public double UpdatedTimeInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.updatedTime"></a>

```csharp
public double UpdatedTime { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNetworkConnectivityConfigConfig <a name="MwsNetworkConnectivityConfigConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Region,
    string AccountId = null,
    double CreationTime = null,
    MwsNetworkConnectivityConfigEgressConfig EgressConfig = null,
    string Id = null,
    string NetworkConnectivityConfigId = null,
    double UpdatedTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#name MwsNetworkConnectivityConfig#name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#region MwsNetworkConnectivityConfig#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#account_id MwsNetworkConnectivityConfig#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.creationTime">CreationTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.egressConfig">EgressConfig</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a></code> | egress_config block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#id MwsNetworkConnectivityConfig#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.updatedTime">UpdatedTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#name MwsNetworkConnectivityConfig#name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#region MwsNetworkConnectivityConfig#region}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#account_id MwsNetworkConnectivityConfig#account_id}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.creationTime"></a>

```csharp
public double CreationTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}.

---

##### `EgressConfig`<sup>Optional</sup> <a name="EgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.egressConfig"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfig EgressConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a>

egress_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#egress_config MwsNetworkConnectivityConfig#egress_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#id MwsNetworkConnectivityConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkConnectivityConfigId`<sup>Optional</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigConfig.property.updatedTime"></a>

```csharp
public double UpdatedTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}.

---

### MwsNetworkConnectivityConfigEgressConfig <a name="MwsNetworkConnectivityConfigEgressConfig" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfig {
    MwsNetworkConnectivityConfigEgressConfigDefaultRules DefaultRules = null,
    MwsNetworkConnectivityConfigEgressConfigTargetRules TargetRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.property.defaultRules">DefaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | default_rules block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.property.targetRules">TargetRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | target_rules block. |

---

##### `DefaultRules`<sup>Optional</sup> <a name="DefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.property.defaultRules"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRules DefaultRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

default_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#default_rules MwsNetworkConnectivityConfig#default_rules}

---

##### `TargetRules`<sup>Optional</sup> <a name="TargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig.property.targetRules"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigTargetRules TargetRules { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a>

target_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#target_rules MwsNetworkConnectivityConfig#target_rules}

---

### MwsNetworkConnectivityConfigEgressConfigDefaultRules <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigDefaultRules {
    MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule AwsStableIpRule = null,
    MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule AzureServiceEndpointRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule">AwsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | aws_stable_ip_rule block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule">AzureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | azure_service_endpoint_rule block. |

---

##### `AwsStableIpRule`<sup>Optional</sup> <a name="AwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.property.awsStableIpRule"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule AwsStableIpRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

aws_stable_ip_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#aws_stable_ip_rule MwsNetworkConnectivityConfig#aws_stable_ip_rule}

---

##### `AzureServiceEndpointRule`<sup>Optional</sup> <a name="AzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules.property.azureServiceEndpointRule"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule AzureServiceEndpointRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

azure_service_endpoint_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#azure_service_endpoint_rule MwsNetworkConnectivityConfig#azure_service_endpoint_rule}

---

### MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule {
    string[] CidrBlocks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#cidr_blocks MwsNetworkConnectivityConfig#cidr_blocks}. |

---

##### `CidrBlocks`<sup>Optional</sup> <a name="CidrBlocks" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#cidr_blocks MwsNetworkConnectivityConfig#cidr_blocks}.

---

### MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule {
    string[] Subnets = null,
    string TargetRegion = null,
    string[] TargetServices = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#subnets MwsNetworkConnectivityConfig#subnets}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion">TargetRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#target_region MwsNetworkConnectivityConfig#target_region}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices">TargetServices</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#target_services MwsNetworkConnectivityConfig#target_services}. |

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#subnets MwsNetworkConnectivityConfig#subnets}.

---

##### `TargetRegion`<sup>Optional</sup> <a name="TargetRegion" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetRegion"></a>

```csharp
public string TargetRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#target_region MwsNetworkConnectivityConfig#target_region}.

---

##### `TargetServices`<sup>Optional</sup> <a name="TargetServices" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule.property.targetServices"></a>

```csharp
public string[] TargetServices { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#target_services MwsNetworkConnectivityConfig#target_services}.

---

### MwsNetworkConnectivityConfigEgressConfigTargetRules <a name="MwsNetworkConnectivityConfigEgressConfigTargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigTargetRules {
    object AwsPrivateEndpointRules = null,
    object AzurePrivateEndpointRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules.property.awsPrivateEndpointRules">AwsPrivateEndpointRules</a></code> | <code>object</code> | aws_private_endpoint_rules block. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules">AzurePrivateEndpointRules</a></code> | <code>object</code> | azure_private_endpoint_rules block. |

---

##### `AwsPrivateEndpointRules`<sup>Optional</sup> <a name="AwsPrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules.property.awsPrivateEndpointRules"></a>

```csharp
public object AwsPrivateEndpointRules { get; set; }
```

- *Type:* object

aws_private_endpoint_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#aws_private_endpoint_rules MwsNetworkConnectivityConfig#aws_private_endpoint_rules}

---

##### `AzurePrivateEndpointRules`<sup>Optional</sup> <a name="AzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules.property.azurePrivateEndpointRules"></a>

```csharp
public object AzurePrivateEndpointRules { get; set; }
```

- *Type:* object

azure_private_endpoint_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#azure_private_endpoint_rules MwsNetworkConnectivityConfig#azure_private_endpoint_rules}

---

### MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules {
    string AccountId = null,
    string ConnectionState = null,
    double CreationTime = null,
    object Deactivated = null,
    double DeactivatedAt = null,
    string[] DomainNames = null,
    object Enabled = null,
    string EndpointService = null,
    string NetworkConnectivityConfigId = null,
    string[] ResourceNames = null,
    string RuleId = null,
    double UpdatedTime = null,
    string VpcEndpointId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#account_id MwsNetworkConnectivityConfig#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.connectionState">ConnectionState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#connection_state MwsNetworkConnectivityConfig#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.creationTime">CreationTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.deactivated">Deactivated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#deactivated MwsNetworkConnectivityConfig#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.deactivatedAt">DeactivatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#deactivated_at MwsNetworkConnectivityConfig#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.domainNames">DomainNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#domain_names MwsNetworkConnectivityConfig#domain_names}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#enabled MwsNetworkConnectivityConfig#enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.endpointService">EndpointService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#endpoint_service MwsNetworkConnectivityConfig#endpoint_service}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.resourceNames">ResourceNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#resource_names MwsNetworkConnectivityConfig#resource_names}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.ruleId">RuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#rule_id MwsNetworkConnectivityConfig#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.updatedTime">UpdatedTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#vpc_endpoint_id MwsNetworkConnectivityConfig#vpc_endpoint_id}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#account_id MwsNetworkConnectivityConfig#account_id}.

---

##### `ConnectionState`<sup>Optional</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.connectionState"></a>

```csharp
public string ConnectionState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#connection_state MwsNetworkConnectivityConfig#connection_state}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.creationTime"></a>

```csharp
public double CreationTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}.

---

##### `Deactivated`<sup>Optional</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.deactivated"></a>

```csharp
public object Deactivated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#deactivated MwsNetworkConnectivityConfig#deactivated}.

---

##### `DeactivatedAt`<sup>Optional</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.deactivatedAt"></a>

```csharp
public double DeactivatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#deactivated_at MwsNetworkConnectivityConfig#deactivated_at}.

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.domainNames"></a>

```csharp
public string[] DomainNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#domain_names MwsNetworkConnectivityConfig#domain_names}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#enabled MwsNetworkConnectivityConfig#enabled}.

---

##### `EndpointService`<sup>Optional</sup> <a name="EndpointService" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.endpointService"></a>

```csharp
public string EndpointService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#endpoint_service MwsNetworkConnectivityConfig#endpoint_service}.

---

##### `NetworkConnectivityConfigId`<sup>Optional</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `ResourceNames`<sup>Optional</sup> <a name="ResourceNames" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.resourceNames"></a>

```csharp
public string[] ResourceNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#resource_names MwsNetworkConnectivityConfig#resource_names}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#rule_id MwsNetworkConnectivityConfig#rule_id}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.updatedTime"></a>

```csharp
public double UpdatedTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRules.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#vpc_endpoint_id MwsNetworkConnectivityConfig#vpc_endpoint_id}.

---

### MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules {
    string ConnectionState = null,
    double CreationTime = null,
    object Deactivated = null,
    double DeactivatedAt = null,
    string[] DomainNames = null,
    string EndpointName = null,
    string GroupId = null,
    string NetworkConnectivityConfigId = null,
    string ResourceId = null,
    string RuleId = null,
    double UpdatedTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState">ConnectionState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#connection_state MwsNetworkConnectivityConfig#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime">CreationTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated">Deactivated</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#deactivated MwsNetworkConnectivityConfig#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt">DeactivatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#deactivated_at MwsNetworkConnectivityConfig#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.domainNames">DomainNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#domain_names MwsNetworkConnectivityConfig#domain_names}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName">EndpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#endpoint_name MwsNetworkConnectivityConfig#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId">GroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#group_id MwsNetworkConnectivityConfig#group_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId">ResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#resource_id MwsNetworkConnectivityConfig#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId">RuleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#rule_id MwsNetworkConnectivityConfig#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime">UpdatedTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}. |

---

##### `ConnectionState`<sup>Optional</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.connectionState"></a>

```csharp
public string ConnectionState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#connection_state MwsNetworkConnectivityConfig#connection_state}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.creationTime"></a>

```csharp
public double CreationTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#creation_time MwsNetworkConnectivityConfig#creation_time}.

---

##### `Deactivated`<sup>Optional</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivated"></a>

```csharp
public object Deactivated { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#deactivated MwsNetworkConnectivityConfig#deactivated}.

---

##### `DeactivatedAt`<sup>Optional</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.deactivatedAt"></a>

```csharp
public double DeactivatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#deactivated_at MwsNetworkConnectivityConfig#deactivated_at}.

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.domainNames"></a>

```csharp
public string[] DomainNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#domain_names MwsNetworkConnectivityConfig#domain_names}.

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.endpointName"></a>

```csharp
public string EndpointName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#endpoint_name MwsNetworkConnectivityConfig#endpoint_name}.

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.groupId"></a>

```csharp
public string GroupId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#group_id MwsNetworkConnectivityConfig#group_id}.

---

##### `NetworkConnectivityConfigId`<sup>Optional</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#network_connectivity_config_id MwsNetworkConnectivityConfig#network_connectivity_config_id}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#resource_id MwsNetworkConnectivityConfig#resource_id}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.ruleId"></a>

```csharp
public string RuleId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#rule_id MwsNetworkConnectivityConfig#rule_id}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRules.property.updatedTime"></a>

```csharp
public double UpdatedTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/resources/mws_network_connectivity_config#updated_time MwsNetworkConnectivityConfig#updated_time}.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks">ResetCidrBlocks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidrBlocks` <a name="ResetCidrBlocks" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.resetCidrBlocks"></a>

```csharp
private void ResetCidrBlocks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput">CidrBlocksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks">CidrBlocks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrBlocksInput`<sup>Optional</sup> <a name="CidrBlocksInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocksInput"></a>

```csharp
public string[] CidrBlocksInput { get; }
```

- *Type:* string[]

---

##### `CidrBlocks`<sup>Required</sup> <a name="CidrBlocks" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.cidrBlocks"></a>

```csharp
public string[] CidrBlocks { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference.property.internalValue"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---


### MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion">ResetTargetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices">ResetTargetServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```

##### `ResetTargetRegion` <a name="ResetTargetRegion" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetRegion"></a>

```csharp
private void ResetTargetRegion()
```

##### `ResetTargetServices` <a name="ResetTargetServices" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.resetTargetServices"></a>

```csharp
private void ResetTargetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput">TargetRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput">TargetServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion">TargetRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices">TargetServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `TargetRegionInput`<sup>Optional</sup> <a name="TargetRegionInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegionInput"></a>

```csharp
public string TargetRegionInput { get; }
```

- *Type:* string

---

##### `TargetServicesInput`<sup>Optional</sup> <a name="TargetServicesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServicesInput"></a>

```csharp
public string[] TargetServicesInput { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `TargetRegion`<sup>Required</sup> <a name="TargetRegion" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetRegion"></a>

```csharp
public string TargetRegion { get; }
```

- *Type:* string

---

##### `TargetServices`<sup>Required</sup> <a name="TargetServices" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.targetServices"></a>

```csharp
public string[] TargetServices { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference.property.internalValue"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---


### MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule">PutAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule">PutAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule">ResetAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule">ResetAzureServiceEndpointRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsStableIpRule` <a name="PutAwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule"></a>

```csharp
private void PutAwsStableIpRule(MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAwsStableIpRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `PutAzureServiceEndpointRule` <a name="PutAzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule"></a>

```csharp
private void PutAzureServiceEndpointRule(MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.putAzureServiceEndpointRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `ResetAwsStableIpRule` <a name="ResetAwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAwsStableIpRule"></a>

```csharp
private void ResetAwsStableIpRule()
```

##### `ResetAzureServiceEndpointRule` <a name="ResetAzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.resetAzureServiceEndpointRule"></a>

```csharp
private void ResetAzureServiceEndpointRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule">AwsStableIpRule</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule">AzureServiceEndpointRule</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput">AwsStableIpRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput">AzureServiceEndpointRuleInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsStableIpRule`<sup>Required</sup> <a name="AwsStableIpRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRule"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference AwsStableIpRule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRuleOutputReference</a>

---

##### `AzureServiceEndpointRule`<sup>Required</sup> <a name="AzureServiceEndpointRule" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRule"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference AzureServiceEndpointRule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRuleOutputReference</a>

---

##### `AwsStableIpRuleInput`<sup>Optional</sup> <a name="AwsStableIpRuleInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.awsStableIpRuleInput"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule AwsStableIpRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAwsStableIpRule</a>

---

##### `AzureServiceEndpointRuleInput`<sup>Optional</sup> <a name="AzureServiceEndpointRuleInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.azureServiceEndpointRuleInput"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule AzureServiceEndpointRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule">MwsNetworkConnectivityConfigEgressConfigDefaultRulesAzureServiceEndpointRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference.property.internalValue"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---


### MwsNetworkConnectivityConfigEgressConfigOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules">PutDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules">PutTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules">ResetDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules">ResetTargetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRules` <a name="PutDefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules"></a>

```csharp
private void PutDefaultRules(MwsNetworkConnectivityConfigEgressConfigDefaultRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putDefaultRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `PutTargetRules` <a name="PutTargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules"></a>

```csharp
private void PutTargetRules(MwsNetworkConnectivityConfigEgressConfigTargetRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.putTargetRules.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `ResetDefaultRules` <a name="ResetDefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resetDefaultRules"></a>

```csharp
private void ResetDefaultRules()
```

##### `ResetTargetRules` <a name="ResetTargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.resetTargetRules"></a>

```csharp
private void ResetTargetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules">DefaultRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules">TargetRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput">DefaultRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput">TargetRulesInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultRules`<sup>Required</sup> <a name="DefaultRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRules"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference DefaultRules { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference">MwsNetworkConnectivityConfigEgressConfigDefaultRulesOutputReference</a>

---

##### `TargetRules`<sup>Required</sup> <a name="TargetRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRules"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference TargetRules { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference">MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference</a>

---

##### `DefaultRulesInput`<sup>Optional</sup> <a name="DefaultRulesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.defaultRulesInput"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigDefaultRules DefaultRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigDefaultRules">MwsNetworkConnectivityConfigEgressConfigDefaultRules</a>

---

##### `TargetRulesInput`<sup>Optional</sup> <a name="TargetRulesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.targetRulesInput"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigTargetRules TargetRulesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigOutputReference.property.internalValue"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfig">MwsNetworkConnectivityConfigEgressConfig</a>

---


### MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.get"></a>

```csharp
private MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetConnectionState">ResetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetDeactivated">ResetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetDeactivatedAt">ResetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetDomainNames">ResetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetEndpointService">ResetEndpointService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId">ResetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetResourceNames">ResetResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetConnectionState` <a name="ResetConnectionState" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetConnectionState"></a>

```csharp
private void ResetConnectionState()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetDeactivated` <a name="ResetDeactivated" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetDeactivated"></a>

```csharp
private void ResetDeactivated()
```

##### `ResetDeactivatedAt` <a name="ResetDeactivatedAt" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetDeactivatedAt"></a>

```csharp
private void ResetDeactivatedAt()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetDomainNames"></a>

```csharp
private void ResetDomainNames()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEndpointService` <a name="ResetEndpointService" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetEndpointService"></a>

```csharp
private void ResetEndpointService()
```

##### `ResetNetworkConnectivityConfigId` <a name="ResetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId"></a>

```csharp
private void ResetNetworkConnectivityConfigId()
```

##### `ResetResourceNames` <a name="ResetResourceNames" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetResourceNames"></a>

```csharp
private void ResetResourceNames()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetRuleId"></a>

```csharp
private void ResetRuleId()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetUpdatedTime"></a>

```csharp
private void ResetUpdatedTime()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.resetVpcEndpointId"></a>

```csharp
private void ResetVpcEndpointId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.connectionStateInput">ConnectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.creationTimeInput">CreationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.deactivatedAtInput">DeactivatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.deactivatedInput">DeactivatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.domainNamesInput">DomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.endpointServiceInput">EndpointServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.resourceNamesInput">ResourceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.deactivated">Deactivated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.deactivatedAt">DeactivatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.domainNames">DomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.endpointService">EndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.resourceNames">ResourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.updatedTime">UpdatedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConnectionStateInput`<sup>Optional</sup> <a name="ConnectionStateInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.connectionStateInput"></a>

```csharp
public string ConnectionStateInput { get; }
```

- *Type:* string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.creationTimeInput"></a>

```csharp
public double CreationTimeInput { get; }
```

- *Type:* double

---

##### `DeactivatedAtInput`<sup>Optional</sup> <a name="DeactivatedAtInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.deactivatedAtInput"></a>

```csharp
public double DeactivatedAtInput { get; }
```

- *Type:* double

---

##### `DeactivatedInput`<sup>Optional</sup> <a name="DeactivatedInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.deactivatedInput"></a>

```csharp
public object DeactivatedInput { get; }
```

- *Type:* object

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.domainNamesInput"></a>

```csharp
public string[] DomainNamesInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EndpointServiceInput`<sup>Optional</sup> <a name="EndpointServiceInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.endpointServiceInput"></a>

```csharp
public string EndpointServiceInput { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput"></a>

```csharp
public string NetworkConnectivityConfigIdInput { get; }
```

- *Type:* string

---

##### `ResourceNamesInput`<sup>Optional</sup> <a name="ResourceNamesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.resourceNamesInput"></a>

```csharp
public string[] ResourceNamesInput { get; }
```

- *Type:* string[]

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.updatedTimeInput"></a>

```csharp
public double UpdatedTimeInput { get; }
```

- *Type:* double

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.vpcEndpointIdInput"></a>

```csharp
public string VpcEndpointIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.deactivated"></a>

```csharp
public object Deactivated { get; }
```

- *Type:* object

---

##### `DeactivatedAt`<sup>Required</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.deactivatedAt"></a>

```csharp
public double DeactivatedAt { get; }
```

- *Type:* double

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.domainNames"></a>

```csharp
public string[] DomainNames { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EndpointService`<sup>Required</sup> <a name="EndpointService" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.endpointService"></a>

```csharp
public string EndpointService { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; }
```

- *Type:* string

---

##### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.resourceNames"></a>

```csharp
public string[] ResourceNames { get; }
```

- *Type:* string[]

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.updatedTime"></a>

```csharp
public double UpdatedTime { get; }
```

- *Type:* double

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get"></a>

```csharp
private MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState">ResetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated">ResetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt">ResetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDomainNames">ResetDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId">ResetNetworkConnectivityConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionState` <a name="ResetConnectionState" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetConnectionState"></a>

```csharp
private void ResetConnectionState()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetDeactivated` <a name="ResetDeactivated" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivated"></a>

```csharp
private void ResetDeactivated()
```

##### `ResetDeactivatedAt` <a name="ResetDeactivatedAt" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDeactivatedAt"></a>

```csharp
private void ResetDeactivatedAt()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetDomainNames"></a>

```csharp
private void ResetDomainNames()
```

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetEndpointName"></a>

```csharp
private void ResetEndpointName()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetGroupId"></a>

```csharp
private void ResetGroupId()
```

##### `ResetNetworkConnectivityConfigId` <a name="ResetNetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetNetworkConnectivityConfigId"></a>

```csharp
private void ResetNetworkConnectivityConfigId()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetRuleId"></a>

```csharp
private void ResetRuleId()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.resetUpdatedTime"></a>

```csharp
private void ResetUpdatedTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput">ConnectionStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput">CreationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput">DeactivatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput">DeactivatedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNamesInput">DomainNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput">EndpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput">GroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput">RuleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated">Deactivated</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt">DeactivatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNames">DomainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId">GroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime">UpdatedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionStateInput`<sup>Optional</sup> <a name="ConnectionStateInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionStateInput"></a>

```csharp
public string ConnectionStateInput { get; }
```

- *Type:* string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTimeInput"></a>

```csharp
public double CreationTimeInput { get; }
```

- *Type:* double

---

##### `DeactivatedAtInput`<sup>Optional</sup> <a name="DeactivatedAtInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAtInput"></a>

```csharp
public double DeactivatedAtInput { get; }
```

- *Type:* double

---

##### `DeactivatedInput`<sup>Optional</sup> <a name="DeactivatedInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedInput"></a>

```csharp
public object DeactivatedInput { get; }
```

- *Type:* object

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNamesInput"></a>

```csharp
public string[] DomainNamesInput { get; }
```

- *Type:* string[]

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointNameInput"></a>

```csharp
public string EndpointNameInput { get; }
```

- *Type:* string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupIdInput"></a>

```csharp
public string GroupIdInput { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigIdInput"></a>

```csharp
public string NetworkConnectivityConfigIdInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleIdInput"></a>

```csharp
public string RuleIdInput { get; }
```

- *Type:* string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTimeInput"></a>

```csharp
public double UpdatedTimeInput { get; }
```

- *Type:* double

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivated"></a>

```csharp
public object Deactivated { get; }
```

- *Type:* object

---

##### `DeactivatedAt`<sup>Required</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.deactivatedAt"></a>

```csharp
public double DeactivatedAt { get; }
```

- *Type:* double

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.domainNames"></a>

```csharp
public string[] DomainNames { get; }
```

- *Type:* string[]

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.groupId"></a>

```csharp
public string GroupId { get; }
```

- *Type:* string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.networkConnectivityConfigId"></a>

```csharp
public string NetworkConnectivityConfigId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.updatedTime"></a>

```csharp
public double UpdatedTime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference <a name="MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAwsPrivateEndpointRules">PutAwsPrivateEndpointRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules">PutAzurePrivateEndpointRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAwsPrivateEndpointRules">ResetAwsPrivateEndpointRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules">ResetAzurePrivateEndpointRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsPrivateEndpointRules` <a name="PutAwsPrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAwsPrivateEndpointRules"></a>

```csharp
private void PutAwsPrivateEndpointRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAwsPrivateEndpointRules.parameter.value"></a>

- *Type:* object

---

##### `PutAzurePrivateEndpointRules` <a name="PutAzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules"></a>

```csharp
private void PutAzurePrivateEndpointRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.putAzurePrivateEndpointRules.parameter.value"></a>

- *Type:* object

---

##### `ResetAwsPrivateEndpointRules` <a name="ResetAwsPrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAwsPrivateEndpointRules"></a>

```csharp
private void ResetAwsPrivateEndpointRules()
```

##### `ResetAzurePrivateEndpointRules` <a name="ResetAzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.resetAzurePrivateEndpointRules"></a>

```csharp
private void ResetAzurePrivateEndpointRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.awsPrivateEndpointRules">AwsPrivateEndpointRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList">MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules">AzurePrivateEndpointRules</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.awsPrivateEndpointRulesInput">AwsPrivateEndpointRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput">AzurePrivateEndpointRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsPrivateEndpointRules`<sup>Required</sup> <a name="AwsPrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.awsPrivateEndpointRules"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList AwsPrivateEndpointRules { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList">MwsNetworkConnectivityConfigEgressConfigTargetRulesAwsPrivateEndpointRulesList</a>

---

##### `AzurePrivateEndpointRules`<sup>Required</sup> <a name="AzurePrivateEndpointRules" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRules"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList AzurePrivateEndpointRules { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList">MwsNetworkConnectivityConfigEgressConfigTargetRulesAzurePrivateEndpointRulesList</a>

---

##### `AwsPrivateEndpointRulesInput`<sup>Optional</sup> <a name="AwsPrivateEndpointRulesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.awsPrivateEndpointRulesInput"></a>

```csharp
public object AwsPrivateEndpointRulesInput { get; }
```

- *Type:* object

---

##### `AzurePrivateEndpointRulesInput`<sup>Optional</sup> <a name="AzurePrivateEndpointRulesInput" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.azurePrivateEndpointRulesInput"></a>

```csharp
public object AzurePrivateEndpointRulesInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRulesOutputReference.property.internalValue"></a>

```csharp
public MwsNetworkConnectivityConfigEgressConfigTargetRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsNetworkConnectivityConfig.MwsNetworkConnectivityConfigEgressConfigTargetRules">MwsNetworkConnectivityConfigEgressConfigTargetRules</a>

---



