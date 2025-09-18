# `accountFederationPolicy` Submodule <a name="`accountFederationPolicy` Submodule" id="@cdktf/provider-databricks.accountFederationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountFederationPolicy <a name="AccountFederationPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy databricks_account_federation_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountFederationPolicy(Construct Scope, string Id, AccountFederationPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig">AccountFederationPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig">AccountFederationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.putOidcPolicy">PutOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOidcPolicy">ResetOidcPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetServicePrincipalId">ResetServicePrincipalId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOidcPolicy` <a name="PutOidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.putOidcPolicy"></a>

```csharp
private void PutOidcPolicy(AccountFederationPolicyOidcPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.putOidcPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetOidcPolicy` <a name="ResetOidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetOidcPolicy"></a>

```csharp
private void ResetOidcPolicy()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetServicePrincipalId` <a name="ResetServicePrincipalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.resetServicePrincipalId"></a>

```csharp
private void ResetServicePrincipalId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AccountFederationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountFederationPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountFederationPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountFederationPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

AccountFederationPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a AccountFederationPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountFederationPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountFederationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the AccountFederationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference">AccountFederationPolicyOidcPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicyInput">OidcPolicyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalIdInput">ServicePrincipalIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OidcPolicy`<sup>Required</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicy"></a>

```csharp
public AccountFederationPolicyOidcPolicyOutputReference OidcPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference">AccountFederationPolicyOidcPolicyOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `OidcPolicyInput`<sup>Optional</sup> <a name="OidcPolicyInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.oidcPolicyInput"></a>

```csharp
public object OidcPolicyInput { get; }
```

- *Type:* object

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalIdInput`<sup>Optional</sup> <a name="ServicePrincipalIdInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalIdInput"></a>

```csharp
public double ServicePrincipalIdInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `ServicePrincipalId`<sup>Required</sup> <a name="ServicePrincipalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountFederationPolicyConfig <a name="AccountFederationPolicyConfig" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountFederationPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description = null,
    AccountFederationPolicyOidcPolicy OidcPolicy = null,
    string PolicyId = null,
    double ServicePrincipalId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#description AccountFederationPolicy#description}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.oidcPolicy">OidcPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#oidc_policy AccountFederationPolicy#oidc_policy}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#policy_id AccountFederationPolicy#policy_id}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.servicePrincipalId">ServicePrincipalId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#service_principal_id AccountFederationPolicy#service_principal_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#description AccountFederationPolicy#description}.

---

##### `OidcPolicy`<sup>Optional</sup> <a name="OidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.oidcPolicy"></a>

```csharp
public AccountFederationPolicyOidcPolicy OidcPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy">AccountFederationPolicyOidcPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#oidc_policy AccountFederationPolicy#oidc_policy}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#policy_id AccountFederationPolicy#policy_id}.

---

##### `ServicePrincipalId`<sup>Optional</sup> <a name="ServicePrincipalId" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyConfig.property.servicePrincipalId"></a>

```csharp
public double ServicePrincipalId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#service_principal_id AccountFederationPolicy#service_principal_id}.

---

### AccountFederationPolicyOidcPolicy <a name="AccountFederationPolicyOidcPolicy" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountFederationPolicyOidcPolicy {
    string[] Audiences = null,
    string Issuer = null,
    string JwksJson = null,
    string JwksUri = null,
    string Subject = null,
    string SubjectClaim = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.audiences">Audiences</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#audiences AccountFederationPolicy#audiences}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#issuer AccountFederationPolicy#issuer}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksJson">JwksJson</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#jwks_json AccountFederationPolicy#jwks_json}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksUri">JwksUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#jwks_uri AccountFederationPolicy#jwks_uri}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subject">Subject</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#subject AccountFederationPolicy#subject}. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#subject_claim AccountFederationPolicy#subject_claim}. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.audiences"></a>

```csharp
public string[] Audiences { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#audiences AccountFederationPolicy#audiences}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#issuer AccountFederationPolicy#issuer}.

---

##### `JwksJson`<sup>Optional</sup> <a name="JwksJson" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksJson"></a>

```csharp
public string JwksJson { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#jwks_json AccountFederationPolicy#jwks_json}.

---

##### `JwksUri`<sup>Optional</sup> <a name="JwksUri" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.jwksUri"></a>

```csharp
public string JwksUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#jwks_uri AccountFederationPolicy#jwks_uri}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subject"></a>

```csharp
public string Subject { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#subject AccountFederationPolicy#subject}.

---

##### `SubjectClaim`<sup>Optional</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicy.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/account_federation_policy#subject_claim AccountFederationPolicy#subject_claim}.

---

## Classes <a name="Classes" id="Classes"></a>

### AccountFederationPolicyOidcPolicyOutputReference <a name="AccountFederationPolicyOidcPolicyOutputReference" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new AccountFederationPolicyOidcPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksJson">ResetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksUri">ResetJwksUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim">ResetSubjectClaim</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetAudiences"></a>

```csharp
private void ResetAudiences()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetIssuer"></a>

```csharp
private void ResetIssuer()
```

##### `ResetJwksJson` <a name="ResetJwksJson" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksJson"></a>

```csharp
private void ResetJwksJson()
```

##### `ResetJwksUri` <a name="ResetJwksUri" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetJwksUri"></a>

```csharp
private void ResetJwksUri()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubject"></a>

```csharp
private void ResetSubject()
```

##### `ResetSubjectClaim` <a name="ResetSubjectClaim" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.resetSubjectClaim"></a>

```csharp
private void ResetSubjectClaim()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput">JwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput">JwksUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput">SubjectClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectInput">SubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJson">JwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUri">JwksUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim">SubjectClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiencesInput"></a>

```csharp
public string[] AudiencesInput { get; }
```

- *Type:* string[]

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `JwksJsonInput`<sup>Optional</sup> <a name="JwksJsonInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJsonInput"></a>

```csharp
public string JwksJsonInput { get; }
```

- *Type:* string

---

##### `JwksUriInput`<sup>Optional</sup> <a name="JwksUriInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUriInput"></a>

```csharp
public string JwksUriInput { get; }
```

- *Type:* string

---

##### `SubjectClaimInput`<sup>Optional</sup> <a name="SubjectClaimInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaimInput"></a>

```csharp
public string SubjectClaimInput { get; }
```

- *Type:* string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectInput"></a>

```csharp
public string SubjectInput { get; }
```

- *Type:* string

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `JwksJson`<sup>Required</sup> <a name="JwksJson" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksJson"></a>

```csharp
public string JwksJson { get; }
```

- *Type:* string

---

##### `JwksUri`<sup>Required</sup> <a name="JwksUri" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.jwksUri"></a>

```csharp
public string JwksUri { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `SubjectClaim`<sup>Required</sup> <a name="SubjectClaim" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.subjectClaim"></a>

```csharp
public string SubjectClaim { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.accountFederationPolicy.AccountFederationPolicyOidcPolicyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



