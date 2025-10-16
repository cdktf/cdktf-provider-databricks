# `recipientFederationPolicy` Submodule <a name="`recipientFederationPolicy` Submodule" id="@cdktf/provider-databricks.recipientFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RecipientFederationPolicy <a name="RecipientFederationPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy databricks_recipient_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientFederationPolicy(Construct Scope, string Id, RecipientFederationPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig">RecipientFederationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig">RecipientFederationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.putOidcPolicy">PutOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetOidcPolicy">ResetOidcPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOidcPolicy` <a name="PutOidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.putOidcPolicy"></a>

```csharp
private void PutOidcPolicy(RecipientFederationPolicyOidcPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOidcPolicy` <a name="ResetOidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.resetOidcPolicy"></a>

```csharp
private void ResetOidcPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RecipientFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

RecipientFederationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

RecipientFederationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

RecipientFederationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

RecipientFederationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a RecipientFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RecipientFederationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RecipientFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the RecipientFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference">RecipientFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.oidcPolicyInput">OidcPolicyInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OidcPolicy`<sup>Required</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.oidcPolicy"></a>

```csharp
public RecipientFederationPolicyOidcPolicyOutputReference OidcPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference">RecipientFederationPolicyOidcPolicyOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OidcPolicyInput`<sup>Optional</sup> <a name="OidcPolicyInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.oidcPolicyInput"></a>

```csharp
public IResolvable|RecipientFederationPolicyOidcPolicy OidcPolicyInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a>

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RecipientFederationPolicyConfig <a name="RecipientFederationPolicyConfig" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientFederationPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Comment = null,
    string Name = null,
    RecipientFederationPolicyOidcPolicy OidcPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#comment RecipientFederationPolicy#comment}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#name RecipientFederationPolicy#name}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#oidc_policy RecipientFederationPolicy#oidc_policy}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#comment RecipientFederationPolicy#comment}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#name RecipientFederationPolicy#name}.

---

##### `OidcPolicy`<sup>Optional</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyConfig.property.oidcPolicy"></a>

```csharp
public RecipientFederationPolicyOidcPolicy OidcPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#oidc_policy RecipientFederationPolicy#oidc_policy}.

---

### RecipientFederationPolicyOidcPolicy <a name="RecipientFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientFederationPolicyOidcPolicy {
    string Issuer,
    string Subject,
    string SubjectClaim,
    string[] Audiences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#issuer RecipientFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#subject RecipientFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#subject_claim RecipientFederationPolicy#subject_claim}. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.audiences">Audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#audiences RecipientFederationPolicy#audiences}. |

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#issuer RecipientFederationPolicy#issuer}.

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#subject RecipientFederationPolicy#subject}.

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#subject_claim RecipientFederationPolicy#subject_claim}.

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy.property.audiences"></a>

```csharp
public string[] Audiences { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/recipient_federation_policy#audiences RecipientFederationPolicy#audiences}.

---

## Classes <a name="Classes" id="Classes"></a>

### RecipientFederationPolicyOidcPolicyOutputReference <a name="RecipientFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new RecipientFederationPolicyOidcPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```csharp
private void ResetAudiences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">SubjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```csharp
public string[] AudiencesInput { get; }
```

- *Type:* string[]

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `SubjectClaimInput`<sup>Optional</sup> <a name="SubjectClaimInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```csharp
public string SubjectClaimInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RecipientFederationPolicyOidcPolicy InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.recipientFederationPolicy.RecipientFederationPolicyOidcPolicy">RecipientFederationPolicyOidcPolicy</a>

---



