# `mwsCustomerManagedKeys` Submodule <a name="`mwsCustomerManagedKeys` Submodule" id="@cdktf/provider-databricks.mwsCustomerManagedKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsCustomerManagedKeys <a name="MwsCustomerManagedKeys" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys databricks_mws_customer_managed_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsCustomerManagedKeys(Construct Scope, string Id, MwsCustomerManagedKeysConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig">MwsCustomerManagedKeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig">MwsCustomerManagedKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo">PutAwsKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCustomerManagedKeyId">ResetCustomerManagedKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAwsKeyInfo` <a name="PutAwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo"></a>

```csharp
private void PutAwsKeyInfo(MwsCustomerManagedKeysAwsKeyInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.putAwsKeyInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetCustomerManagedKeyId` <a name="ResetCustomerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetCustomerManagedKeyId"></a>

```csharp
private void ResetCustomerManagedKeyId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsCustomerManagedKeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsCustomerManagedKeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsCustomerManagedKeys.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfo">AwsKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference">MwsCustomerManagedKeysAwsKeyInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfoInput">AwsKeyInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTimeInput">CreationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyIdInput">CustomerManagedKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCasesInput">UseCasesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCases">UseCases</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsKeyInfo`<sup>Required</sup> <a name="AwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfo"></a>

```csharp
public MwsCustomerManagedKeysAwsKeyInfoOutputReference AwsKeyInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference">MwsCustomerManagedKeysAwsKeyInfoOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AwsKeyInfoInput`<sup>Optional</sup> <a name="AwsKeyInfoInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.awsKeyInfoInput"></a>

```csharp
public MwsCustomerManagedKeysAwsKeyInfo AwsKeyInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTimeInput"></a>

```csharp
public double CreationTimeInput { get; }
```

- *Type:* double

---

##### `CustomerManagedKeyIdInput`<sup>Optional</sup> <a name="CustomerManagedKeyIdInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyIdInput"></a>

```csharp
public string CustomerManagedKeyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UseCasesInput`<sup>Optional</sup> <a name="UseCasesInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCasesInput"></a>

```csharp
public string[] UseCasesInput { get; }
```

- *Type:* string[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `CustomerManagedKeyId`<sup>Required</sup> <a name="CustomerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.customerManagedKeyId"></a>

```csharp
public string CustomerManagedKeyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.useCases"></a>

```csharp
public string[] UseCases { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsCustomerManagedKeysAwsKeyInfo <a name="MwsCustomerManagedKeysAwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsCustomerManagedKeysAwsKeyInfo {
    string KeyAlias,
    string KeyArn,
    string KeyRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyAlias">KeyAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyArn">KeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyRegion">KeyRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}. |

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyAlias"></a>

```csharp
public string KeyAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_alias MwsCustomerManagedKeys#key_alias}.

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyArn"></a>

```csharp
public string KeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_arn MwsCustomerManagedKeys#key_arn}.

---

##### `KeyRegion`<sup>Optional</sup> <a name="KeyRegion" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo.property.keyRegion"></a>

```csharp
public string KeyRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#key_region MwsCustomerManagedKeys#key_region}.

---

### MwsCustomerManagedKeysConfig <a name="MwsCustomerManagedKeysConfig" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsCustomerManagedKeysConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    MwsCustomerManagedKeysAwsKeyInfo AwsKeyInfo,
    string[] UseCases,
    double CreationTime = null,
    string CustomerManagedKeyId = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.awsKeyInfo">AwsKeyInfo</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | aws_key_info block. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.useCases">UseCases</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.creationTime">CreationTime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.customerManagedKeyId">CustomerManagedKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#account_id MwsCustomerManagedKeys#account_id}.

---

##### `AwsKeyInfo`<sup>Required</sup> <a name="AwsKeyInfo" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.awsKeyInfo"></a>

```csharp
public MwsCustomerManagedKeysAwsKeyInfo AwsKeyInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

aws_key_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#aws_key_info MwsCustomerManagedKeys#aws_key_info}

---

##### `UseCases`<sup>Required</sup> <a name="UseCases" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.useCases"></a>

```csharp
public string[] UseCases { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#use_cases MwsCustomerManagedKeys#use_cases}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.creationTime"></a>

```csharp
public double CreationTime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#creation_time MwsCustomerManagedKeys#creation_time}.

---

##### `CustomerManagedKeyId`<sup>Optional</sup> <a name="CustomerManagedKeyId" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.customerManagedKeyId"></a>

```csharp
public string CustomerManagedKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#customer_managed_key_id MwsCustomerManagedKeys#customer_managed_key_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/r/mws_customer_managed_keys#id MwsCustomerManagedKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### MwsCustomerManagedKeysAwsKeyInfoOutputReference <a name="MwsCustomerManagedKeysAwsKeyInfoOutputReference" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsCustomerManagedKeysAwsKeyInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyRegion">ResetKeyRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyRegion` <a name="ResetKeyRegion" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.resetKeyRegion"></a>

```csharp
private void ResetKeyRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAliasInput">KeyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArnInput">KeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegionInput">KeyRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAlias">KeyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegion">KeyRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyAliasInput`<sup>Optional</sup> <a name="KeyAliasInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAliasInput"></a>

```csharp
public string KeyAliasInput { get; }
```

- *Type:* string

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArnInput"></a>

```csharp
public string KeyArnInput { get; }
```

- *Type:* string

---

##### `KeyRegionInput`<sup>Optional</sup> <a name="KeyRegionInput" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegionInput"></a>

```csharp
public string KeyRegionInput { get; }
```

- *Type:* string

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyAlias"></a>

```csharp
public string KeyAlias { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `KeyRegion`<sup>Required</sup> <a name="KeyRegion" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.keyRegion"></a>

```csharp
public string KeyRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfoOutputReference.property.internalValue"></a>

```csharp
public MwsCustomerManagedKeysAwsKeyInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.mwsCustomerManagedKeys.MwsCustomerManagedKeysAwsKeyInfo">MwsCustomerManagedKeysAwsKeyInfo</a>

---


