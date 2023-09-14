# `databricks_mount`

Refer to the Terraform Registory for docs: [`databricks_mount`](https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount).

# `mount` Submodule <a name="`mount` Submodule" id="@cdktf/provider-databricks.mount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Mount <a name="Mount" id="@cdktf/provider-databricks.mount.Mount"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount databricks_mount}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.Mount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.NewMount(scope Construct, id *string, config MountConfig) Mount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountConfig">MountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mount.Mount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mount.Mount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.mount.Mount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountConfig">MountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putAbfs">PutAbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putAdl">PutAdl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putGs">PutGs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.putWasb">PutWasb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetAbfs">ResetAbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetAdl">ResetAdl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetExtraConfigs">ResetExtraConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetGs">ResetGs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetUri">ResetUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.resetWasb">ResetWasb</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mount.Mount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mount.Mount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mount.Mount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mount.Mount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mount.Mount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mount.Mount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mount.Mount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mount.Mount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mount.Mount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mount.Mount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mount.Mount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mount.Mount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mount.Mount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mount.Mount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mount.Mount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.Mount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAbfs` <a name="PutAbfs" id="@cdktf/provider-databricks.mount.Mount.putAbfs"></a>

```go
func PutAbfs(value MountAbfs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putAbfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a>

---

##### `PutAdl` <a name="PutAdl" id="@cdktf/provider-databricks.mount.Mount.putAdl"></a>

```go
func PutAdl(value MountAdl)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putAdl.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a>

---

##### `PutGs` <a name="PutGs" id="@cdktf/provider-databricks.mount.Mount.putGs"></a>

```go
func PutGs(value MountGs)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putGs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a>

---

##### `PutS3` <a name="PutS3" id="@cdktf/provider-databricks.mount.Mount.putS3"></a>

```go
func PutS3(value MountS3)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.mount.Mount.putTimeouts"></a>

```go
func PutTimeouts(value MountTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

---

##### `PutWasb` <a name="PutWasb" id="@cdktf/provider-databricks.mount.Mount.putWasb"></a>

```go
func PutWasb(value MountWasb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mount.Mount.putWasb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a>

---

##### `ResetAbfs` <a name="ResetAbfs" id="@cdktf/provider-databricks.mount.Mount.resetAbfs"></a>

```go
func ResetAbfs()
```

##### `ResetAdl` <a name="ResetAdl" id="@cdktf/provider-databricks.mount.Mount.resetAdl"></a>

```go
func ResetAdl()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.mount.Mount.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktf/provider-databricks.mount.Mount.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetExtraConfigs` <a name="ResetExtraConfigs" id="@cdktf/provider-databricks.mount.Mount.resetExtraConfigs"></a>

```go
func ResetExtraConfigs()
```

##### `ResetGs` <a name="ResetGs" id="@cdktf/provider-databricks.mount.Mount.resetGs"></a>

```go
func ResetGs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mount.Mount.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.mount.Mount.resetName"></a>

```go
func ResetName()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktf/provider-databricks.mount.Mount.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetS3` <a name="ResetS3" id="@cdktf/provider-databricks.mount.Mount.resetS3"></a>

```go
func ResetS3()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.mount.Mount.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-databricks.mount.Mount.resetUri"></a>

```go
func ResetUri()
```

##### `ResetWasb` <a name="ResetWasb" id="@cdktf/provider-databricks.mount.Mount.resetWasb"></a>

```go
func ResetWasb()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mount.Mount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.Mount_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mount.Mount.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mount.Mount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.Mount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mount.Mount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mount.Mount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.Mount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mount.Mount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.abfs">Abfs</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference">MountAbfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.adl">Adl</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference">MountAdlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.gs">Gs</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference">MountGsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference">MountS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference">MountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.wasb">Wasb</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference">MountWasbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.abfsInput">AbfsInput</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.adlInput">AdlInput</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.extraConfigsInput">ExtraConfigsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.gsInput">GsInput</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.s3Input">S3Input</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.wasbInput">WasbInput</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.extraConfigs">ExtraConfigs</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mount.Mount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mount.Mount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mount.Mount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mount.Mount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mount.Mount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mount.Mount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mount.Mount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mount.Mount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mount.Mount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mount.Mount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mount.Mount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mount.Mount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mount.Mount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mount.Mount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Abfs`<sup>Required</sup> <a name="Abfs" id="@cdktf/provider-databricks.mount.Mount.property.abfs"></a>

```go
func Abfs() MountAbfsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference">MountAbfsOutputReference</a>

---

##### `Adl`<sup>Required</sup> <a name="Adl" id="@cdktf/provider-databricks.mount.Mount.property.adl"></a>

```go
func Adl() MountAdlOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference">MountAdlOutputReference</a>

---

##### `Gs`<sup>Required</sup> <a name="Gs" id="@cdktf/provider-databricks.mount.Mount.property.gs"></a>

```go
func Gs() MountGsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGsOutputReference">MountGsOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktf/provider-databricks.mount.Mount.property.s3"></a>

```go
func S3() MountS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3OutputReference">MountS3OutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.mount.Mount.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.mount.Mount.property.timeouts"></a>

```go
func Timeouts() MountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference">MountTimeoutsOutputReference</a>

---

##### `Wasb`<sup>Required</sup> <a name="Wasb" id="@cdktf/provider-databricks.mount.Mount.property.wasb"></a>

```go
func Wasb() MountWasbOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference">MountWasbOutputReference</a>

---

##### `AbfsInput`<sup>Optional</sup> <a name="AbfsInput" id="@cdktf/provider-databricks.mount.Mount.property.abfsInput"></a>

```go
func AbfsInput() MountAbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a>

---

##### `AdlInput`<sup>Optional</sup> <a name="AdlInput" id="@cdktf/provider-databricks.mount.Mount.property.adlInput"></a>

```go
func AdlInput() MountAdl
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.mount.Mount.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktf/provider-databricks.mount.Mount.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `ExtraConfigsInput`<sup>Optional</sup> <a name="ExtraConfigsInput" id="@cdktf/provider-databricks.mount.Mount.property.extraConfigsInput"></a>

```go
func ExtraConfigsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GsInput`<sup>Optional</sup> <a name="GsInput" id="@cdktf/provider-databricks.mount.Mount.property.gsInput"></a>

```go
func GsInput() MountGs
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mount.Mount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.mount.Mount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-databricks.mount.Mount.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktf/provider-databricks.mount.Mount.property.s3Input"></a>

```go
func S3Input() MountS3
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.mount.Mount.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-databricks.mount.Mount.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `WasbInput`<sup>Optional</sup> <a name="WasbInput" id="@cdktf/provider-databricks.mount.Mount.property.wasbInput"></a>

```go
func WasbInput() MountWasb
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.mount.Mount.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.mount.Mount.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `ExtraConfigs`<sup>Required</sup> <a name="ExtraConfigs" id="@cdktf/provider-databricks.mount.Mount.property.extraConfigs"></a>

```go
func ExtraConfigs() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mount.Mount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.mount.Mount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mount.Mount.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-databricks.mount.Mount.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.Mount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mount.Mount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MountAbfs <a name="MountAbfs" id="@cdktf/provider-databricks.mount.MountAbfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountAbfs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

&mount.MountAbfs {
	ClientId: *string,
	ClientSecretKey: *string,
	ClientSecretScope: *string,
	InitializeFileSystem: interface{},
	ContainerName: *string,
	Directory: *string,
	StorageAccountName: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_id Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.clientSecretKey">ClientSecretKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_secret_key Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.clientSecretScope">ClientSecretScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_secret_scope Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.initializeFileSystem">InitializeFileSystem</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#initialize_file_system Mount#initialize_file_system}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#container_name Mount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.directory">Directory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#directory Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#storage_account_name Mount#storage_account_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfs.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#tenant_id Mount#tenant_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.mount.MountAbfs.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_id Mount#client_id}.

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktf/provider-databricks.mount.MountAbfs.property.clientSecretKey"></a>

```go
ClientSecretKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_secret_key Mount#client_secret_key}.

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktf/provider-databricks.mount.MountAbfs.property.clientSecretScope"></a>

```go
ClientSecretScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_secret_scope Mount#client_secret_scope}.

---

##### `InitializeFileSystem`<sup>Required</sup> <a name="InitializeFileSystem" id="@cdktf/provider-databricks.mount.MountAbfs.property.initializeFileSystem"></a>

```go
InitializeFileSystem interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#initialize_file_system Mount#initialize_file_system}.

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktf/provider-databricks.mount.MountAbfs.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#container_name Mount#container_name}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-databricks.mount.MountAbfs.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#directory Mount#directory}.

---

##### `StorageAccountName`<sup>Optional</sup> <a name="StorageAccountName" id="@cdktf/provider-databricks.mount.MountAbfs.property.storageAccountName"></a>

```go
StorageAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#storage_account_name Mount#storage_account_name}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-databricks.mount.MountAbfs.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#tenant_id Mount#tenant_id}.

---

### MountAdl <a name="MountAdl" id="@cdktf/provider-databricks.mount.MountAdl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountAdl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

&mount.MountAdl {
	ClientId: *string,
	ClientSecretKey: *string,
	ClientSecretScope: *string,
	Directory: *string,
	SparkConfPrefix: *string,
	StorageResourceName: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_id Mount#client_id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.clientSecretKey">ClientSecretKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_secret_key Mount#client_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.clientSecretScope">ClientSecretScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_secret_scope Mount#client_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.directory">Directory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#directory Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.sparkConfPrefix">SparkConfPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#spark_conf_prefix Mount#spark_conf_prefix}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.storageResourceName">StorageResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#storage_resource_name Mount#storage_resource_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdl.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#tenant_id Mount#tenant_id}. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.mount.MountAdl.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_id Mount#client_id}.

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktf/provider-databricks.mount.MountAdl.property.clientSecretKey"></a>

```go
ClientSecretKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_secret_key Mount#client_secret_key}.

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktf/provider-databricks.mount.MountAdl.property.clientSecretScope"></a>

```go
ClientSecretScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#client_secret_scope Mount#client_secret_scope}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-databricks.mount.MountAdl.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#directory Mount#directory}.

---

##### `SparkConfPrefix`<sup>Optional</sup> <a name="SparkConfPrefix" id="@cdktf/provider-databricks.mount.MountAdl.property.sparkConfPrefix"></a>

```go
SparkConfPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#spark_conf_prefix Mount#spark_conf_prefix}.

---

##### `StorageResourceName`<sup>Optional</sup> <a name="StorageResourceName" id="@cdktf/provider-databricks.mount.MountAdl.property.storageResourceName"></a>

```go
StorageResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#storage_resource_name Mount#storage_resource_name}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-databricks.mount.MountAdl.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#tenant_id Mount#tenant_id}.

---

### MountConfig <a name="MountConfig" id="@cdktf/provider-databricks.mount.MountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

&mount.MountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Abfs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v10.mount.MountAbfs,
	Adl: github.com/cdktf/cdktf-provider-databricks-go/databricks/v10.mount.MountAdl,
	ClusterId: *string,
	EncryptionType: *string,
	ExtraConfigs: *map[string]*string,
	Gs: github.com/cdktf/cdktf-provider-databricks-go/databricks/v10.mount.MountGs,
	Id: *string,
	Name: *string,
	ResourceId: *string,
	S3: github.com/cdktf/cdktf-provider-databricks-go/databricks/v10.mount.MountS3,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks/v10.mount.MountTimeouts,
	Uri: *string,
	Wasb: github.com/cdktf/cdktf-provider-databricks-go/databricks/v10.mount.MountWasb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.abfs">Abfs</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | abfs block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.adl">Adl</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a></code> | adl block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#cluster_id Mount#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#encryption_type Mount#encryption_type}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.extraConfigs">ExtraConfigs</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#extra_configs Mount#extra_configs}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.gs">Gs</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a></code> | gs block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#id Mount#id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#name Mount#name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#resource_id Mount#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.s3">S3</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a></code> | s3 block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#uri Mount#uri}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountConfig.property.wasb">Wasb</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a></code> | wasb block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mount.MountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mount.MountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mount.MountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mount.MountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mount.MountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mount.MountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mount.MountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Abfs`<sup>Optional</sup> <a name="Abfs" id="@cdktf/provider-databricks.mount.MountConfig.property.abfs"></a>

```go
Abfs MountAbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a>

abfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#abfs Mount#abfs}

---

##### `Adl`<sup>Optional</sup> <a name="Adl" id="@cdktf/provider-databricks.mount.MountConfig.property.adl"></a>

```go
Adl MountAdl
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a>

adl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#adl Mount#adl}

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.mount.MountConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#cluster_id Mount#cluster_id}.

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktf/provider-databricks.mount.MountConfig.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#encryption_type Mount#encryption_type}.

---

##### `ExtraConfigs`<sup>Optional</sup> <a name="ExtraConfigs" id="@cdktf/provider-databricks.mount.MountConfig.property.extraConfigs"></a>

```go
ExtraConfigs *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#extra_configs Mount#extra_configs}.

---

##### `Gs`<sup>Optional</sup> <a name="Gs" id="@cdktf/provider-databricks.mount.MountConfig.property.gs"></a>

```go
Gs MountGs
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a>

gs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#gs Mount#gs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mount.MountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#id Mount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.mount.MountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#name Mount#name}.

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mount.MountConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#resource_id Mount#resource_id}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktf/provider-databricks.mount.MountConfig.property.s3"></a>

```go
S3 MountS3
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#s3 Mount#s3}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.mount.MountConfig.property.timeouts"></a>

```go
Timeouts MountTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountTimeouts">MountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#timeouts Mount#timeouts}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-databricks.mount.MountConfig.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#uri Mount#uri}.

---

##### `Wasb`<sup>Optional</sup> <a name="Wasb" id="@cdktf/provider-databricks.mount.MountConfig.property.wasb"></a>

```go
Wasb MountWasb
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a>

wasb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#wasb Mount#wasb}

---

### MountGs <a name="MountGs" id="@cdktf/provider-databricks.mount.MountGs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountGs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

&mount.MountGs {
	BucketName: *string,
	ServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountGs.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#bucket_name Mount#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGs.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#service_account Mount#service_account}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.mount.MountGs.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#bucket_name Mount#bucket_name}.

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktf/provider-databricks.mount.MountGs.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#service_account Mount#service_account}.

---

### MountS3 <a name="MountS3" id="@cdktf/provider-databricks.mount.MountS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountS3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

&mount.MountS3 {
	BucketName: *string,
	InstanceProfile: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#bucket_name Mount#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3.property.instanceProfile">InstanceProfile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#instance_profile Mount#instance_profile}. |

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.mount.MountS3.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#bucket_name Mount#bucket_name}.

---

##### `InstanceProfile`<sup>Optional</sup> <a name="InstanceProfile" id="@cdktf/provider-databricks.mount.MountS3.property.instanceProfile"></a>

```go
InstanceProfile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#instance_profile Mount#instance_profile}.

---

### MountTimeouts <a name="MountTimeouts" id="@cdktf/provider-databricks.mount.MountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

&mount.MountTimeouts {
	Default: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeouts.property.default">Default</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#default Mount#default}. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-databricks.mount.MountTimeouts.property.default"></a>

```go
Default *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#default Mount#default}.

---

### MountWasb <a name="MountWasb" id="@cdktf/provider-databricks.mount.MountWasb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mount.MountWasb.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

&mount.MountWasb {
	AuthType: *string,
	TokenSecretKey: *string,
	TokenSecretScope: *string,
	ContainerName: *string,
	Directory: *string,
	StorageAccountName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#auth_type Mount#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.tokenSecretKey">TokenSecretKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#token_secret_key Mount#token_secret_key}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.tokenSecretScope">TokenSecretScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#token_secret_scope Mount#token_secret_scope}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.containerName">ContainerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#container_name Mount#container_name}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.directory">Directory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#directory Mount#directory}. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasb.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#storage_account_name Mount#storage_account_name}. |

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-databricks.mount.MountWasb.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#auth_type Mount#auth_type}.

---

##### `TokenSecretKey`<sup>Required</sup> <a name="TokenSecretKey" id="@cdktf/provider-databricks.mount.MountWasb.property.tokenSecretKey"></a>

```go
TokenSecretKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#token_secret_key Mount#token_secret_key}.

---

##### `TokenSecretScope`<sup>Required</sup> <a name="TokenSecretScope" id="@cdktf/provider-databricks.mount.MountWasb.property.tokenSecretScope"></a>

```go
TokenSecretScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#token_secret_scope Mount#token_secret_scope}.

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktf/provider-databricks.mount.MountWasb.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#container_name Mount#container_name}.

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-databricks.mount.MountWasb.property.directory"></a>

```go
Directory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#directory Mount#directory}.

---

##### `StorageAccountName`<sup>Optional</sup> <a name="StorageAccountName" id="@cdktf/provider-databricks.mount.MountWasb.property.storageAccountName"></a>

```go
StorageAccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mount#storage_account_name Mount#storage_account_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### MountAbfsOutputReference <a name="MountAbfsOutputReference" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.NewMountAbfsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MountAbfsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetStorageAccountName">ResetStorageAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetContainerName"></a>

```go
func ResetContainerName()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetStorageAccountName` <a name="ResetStorageAccountName" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetStorageAccountName"></a>

```go
func ResetStorageAccountName()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKeyInput">ClientSecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScopeInput">ClientSecretScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystemInput">InitializeFileSystemInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKey">ClientSecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScope">ClientSecretScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystem">InitializeFileSystem</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretKeyInput`<sup>Optional</sup> <a name="ClientSecretKeyInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKeyInput"></a>

```go
func ClientSecretKeyInput() *string
```

- *Type:* *string

---

##### `ClientSecretScopeInput`<sup>Optional</sup> <a name="ClientSecretScopeInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScopeInput"></a>

```go
func ClientSecretScopeInput() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `InitializeFileSystemInput`<sup>Optional</sup> <a name="InitializeFileSystemInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystemInput"></a>

```go
func InitializeFileSystemInput() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountNameInput"></a>

```go
func StorageAccountNameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretKey"></a>

```go
func ClientSecretKey() *string
```

- *Type:* *string

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.clientSecretScope"></a>

```go
func ClientSecretScope() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `InitializeFileSystem`<sup>Required</sup> <a name="InitializeFileSystem" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.initializeFileSystem"></a>

```go
func InitializeFileSystem() interface{}
```

- *Type:* interface{}

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mount.MountAbfsOutputReference.property.internalValue"></a>

```go
func InternalValue() MountAbfs
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAbfs">MountAbfs</a>

---


### MountAdlOutputReference <a name="MountAdlOutputReference" id="@cdktf/provider-databricks.mount.MountAdlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.NewMountAdlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MountAdlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resetSparkConfPrefix">ResetSparkConfPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resetStorageResourceName">ResetStorageResourceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetSparkConfPrefix` <a name="ResetSparkConfPrefix" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resetSparkConfPrefix"></a>

```go
func ResetSparkConfPrefix()
```

##### `ResetStorageResourceName` <a name="ResetStorageResourceName" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resetStorageResourceName"></a>

```go
func ResetStorageResourceName()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKeyInput">ClientSecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScopeInput">ClientSecretScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefixInput">SparkConfPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.storageResourceNameInput">StorageResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKey">ClientSecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScope">ClientSecretScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefix">SparkConfPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.storageResourceName">StorageResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountAdlOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretKeyInput`<sup>Optional</sup> <a name="ClientSecretKeyInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKeyInput"></a>

```go
func ClientSecretKeyInput() *string
```

- *Type:* *string

---

##### `ClientSecretScopeInput`<sup>Optional</sup> <a name="ClientSecretScopeInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScopeInput"></a>

```go
func ClientSecretScopeInput() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `SparkConfPrefixInput`<sup>Optional</sup> <a name="SparkConfPrefixInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefixInput"></a>

```go
func SparkConfPrefixInput() *string
```

- *Type:* *string

---

##### `StorageResourceNameInput`<sup>Optional</sup> <a name="StorageResourceNameInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.storageResourceNameInput"></a>

```go
func StorageResourceNameInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretKey`<sup>Required</sup> <a name="ClientSecretKey" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretKey"></a>

```go
func ClientSecretKey() *string
```

- *Type:* *string

---

##### `ClientSecretScope`<sup>Required</sup> <a name="ClientSecretScope" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.clientSecretScope"></a>

```go
func ClientSecretScope() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `SparkConfPrefix`<sup>Required</sup> <a name="SparkConfPrefix" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.sparkConfPrefix"></a>

```go
func SparkConfPrefix() *string
```

- *Type:* *string

---

##### `StorageResourceName`<sup>Required</sup> <a name="StorageResourceName" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.storageResourceName"></a>

```go
func StorageResourceName() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mount.MountAdlOutputReference.property.internalValue"></a>

```go
func InternalValue() MountAdl
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountAdl">MountAdl</a>

---


### MountGsOutputReference <a name="MountGsOutputReference" id="@cdktf/provider-databricks.mount.MountGsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.NewMountGsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MountGsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mount.MountGsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mount.MountGsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountGsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mount.MountGsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountGsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mount.MountGsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktf/provider-databricks.mount.MountGsOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountGsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mount.MountGsOutputReference.property.internalValue"></a>

```go
func InternalValue() MountGs
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountGs">MountGs</a>

---


### MountS3OutputReference <a name="MountS3OutputReference" id="@cdktf/provider-databricks.mount.MountS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.NewMountS3OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MountS3OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.resetInstanceProfile">ResetInstanceProfile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mount.MountS3OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mount.MountS3OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mount.MountS3OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountS3OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mount.MountS3OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceProfile` <a name="ResetInstanceProfile" id="@cdktf/provider-databricks.mount.MountS3OutputReference.resetInstanceProfile"></a>

```go
func ResetInstanceProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.instanceProfileInput">InstanceProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.instanceProfile">InstanceProfile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountS3OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `InstanceProfileInput`<sup>Optional</sup> <a name="InstanceProfileInput" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.instanceProfileInput"></a>

```go
func InstanceProfileInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `InstanceProfile`<sup>Required</sup> <a name="InstanceProfile" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.instanceProfile"></a>

```go
func InstanceProfile() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mount.MountS3OutputReference.property.internalValue"></a>

```go
func InternalValue() MountS3
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountS3">MountS3</a>

---


### MountTimeoutsOutputReference <a name="MountTimeoutsOutputReference" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.NewMountTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MountTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.resetDefault"></a>

```go
func ResetDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mount.MountTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MountWasbOutputReference <a name="MountWasbOutputReference" id="@cdktf/provider-databricks.mount.MountWasbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v10/mount"

mount.NewMountWasbOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MountWasbOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.resetStorageAccountName">ResetStorageAccountName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resetContainerName"></a>

```go
func ResetContainerName()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resetDirectory"></a>

```go
func ResetDirectory()
```

##### `ResetStorageAccountName` <a name="ResetStorageAccountName" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.resetStorageAccountName"></a>

```go
func ResetStorageAccountName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.storageAccountNameInput">StorageAccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKeyInput">TokenSecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScopeInput">TokenSecretScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.directory">Directory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKey">TokenSecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScope">TokenSecretScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mount.MountWasbOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.directoryInput"></a>

```go
func DirectoryInput() *string
```

- *Type:* *string

---

##### `StorageAccountNameInput`<sup>Optional</sup> <a name="StorageAccountNameInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.storageAccountNameInput"></a>

```go
func StorageAccountNameInput() *string
```

- *Type:* *string

---

##### `TokenSecretKeyInput`<sup>Optional</sup> <a name="TokenSecretKeyInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKeyInput"></a>

```go
func TokenSecretKeyInput() *string
```

- *Type:* *string

---

##### `TokenSecretScopeInput`<sup>Optional</sup> <a name="TokenSecretScopeInput" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScopeInput"></a>

```go
func TokenSecretScopeInput() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.directory"></a>

```go
func Directory() *string
```

- *Type:* *string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `TokenSecretKey`<sup>Required</sup> <a name="TokenSecretKey" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretKey"></a>

```go
func TokenSecretKey() *string
```

- *Type:* *string

---

##### `TokenSecretScope`<sup>Required</sup> <a name="TokenSecretScope" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.tokenSecretScope"></a>

```go
func TokenSecretScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mount.MountWasbOutputReference.property.internalValue"></a>

```go
func InternalValue() MountWasb
```

- *Type:* <a href="#@cdktf/provider-databricks.mount.MountWasb">MountWasb</a>

---



