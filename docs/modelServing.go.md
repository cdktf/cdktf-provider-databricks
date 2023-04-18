# `databricks_model_serving`

Refer to the Terraform Registory for docs: [`databricks_model_serving`](https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving).

# `modelServing` Submodule <a name="`modelServing` Submodule" id="@cdktf/provider-databricks.modelServing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ModelServing <a name="ModelServing" id="@cdktf/provider-databricks.modelServing.ModelServing"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving databricks_model_serving}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.NewModelServing(scope Construct, id *string, config ModelServingConfig) ModelServing
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig">ModelServingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.modelServing.ModelServing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig">ModelServingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServing.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.modelServing.ModelServing.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig"></a>

```go
func PutConfig(value ModelServingConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts"></a>

```go
func PutTimeouts(value ModelServingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServing.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.modelServing.ModelServing.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.ModelServing_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.ModelServing_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.ModelServing_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.modelServing.ModelServing.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.modelServing.ModelServing.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.modelServing.ModelServing.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.modelServing.ModelServing.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.modelServing.ModelServing.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.modelServing.ModelServing.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.modelServing.ModelServing.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.modelServing.ModelServing.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.modelServing.ModelServing.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServing.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.modelServing.ModelServing.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.modelServing.ModelServing.property.config"></a>

```go
func Config() ModelServingConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference">ModelServingConfigAOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeouts"></a>

```go
func Timeouts() ModelServingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference">ModelServingTimeoutsOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.configInput"></a>

```go
func ConfigInput() ModelServingConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.modelServing.ModelServing.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.modelServing.ModelServing.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServing.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.modelServing.ModelServing.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ModelServingConfig <a name="ModelServingConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

&modelserving.ModelServingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Config: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.modelServing.ModelServingConfigA,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.modelServing.ModelServingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#id ModelServing#id}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.config"></a>

```go
Config ModelServingConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#config ModelServing#config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#name ModelServing#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#id ModelServing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.modelServing.ModelServingConfig.property.timeouts"></a>

```go
Timeouts ModelServingTimeouts
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts">ModelServingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#timeouts ModelServing#timeouts}

---

### ModelServingConfigA <a name="ModelServingConfigA" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

&modelserving.ModelServingConfigA {
	ServedModels: interface{},
	TrafficConfig: github.com/cdktf/cdktf-provider-databricks-go/databricks/v7.modelServing.ModelServingConfigTrafficConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels">ServedModels</a></code> | <code>interface{}</code> | served_models block. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig">TrafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | traffic_config block. |

---

##### `ServedModels`<sup>Required</sup> <a name="ServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.servedModels"></a>

```go
ServedModels interface{}
```

- *Type:* interface{}

served_models block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#served_models ModelServing#served_models}

---

##### `TrafficConfig`<sup>Optional</sup> <a name="TrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigA.property.trafficConfig"></a>

```go
TrafficConfig ModelServingConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

traffic_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#traffic_config ModelServing#traffic_config}

---

### ModelServingConfigServedModels <a name="ModelServingConfigServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

&modelserving.ModelServingConfigServedModels {
	ModelName: *string,
	ModelVersion: *string,
	WorkloadSize: *string,
	Name: *string,
	ScaleToZeroEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName">ModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#model_name ModelServing#model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#model_version ModelServing#model_version}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize">WorkloadSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#workload_size ModelServing#workload_size}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#name ModelServing#name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled">ScaleToZeroEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}. |

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#model_name ModelServing#model_name}.

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.modelVersion"></a>

```go
ModelVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#model_version ModelServing#model_version}.

---

##### `WorkloadSize`<sup>Required</sup> <a name="WorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.workloadSize"></a>

```go
WorkloadSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#workload_size ModelServing#workload_size}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#name ModelServing#name}.

---

##### `ScaleToZeroEnabled`<sup>Optional</sup> <a name="ScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModels.property.scaleToZeroEnabled"></a>

```go
ScaleToZeroEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#scale_to_zero_enabled ModelServing#scale_to_zero_enabled}.

---

### ModelServingConfigTrafficConfig <a name="ModelServingConfigTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

&modelserving.ModelServingConfigTrafficConfig {
	Routes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes">Routes</a></code> | <code>interface{}</code> | routes block. |

---

##### `Routes`<sup>Optional</sup> <a name="Routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig.property.routes"></a>

```go
Routes interface{}
```

- *Type:* interface{}

routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#routes ModelServing#routes}

---

### ModelServingConfigTrafficConfigRoutes <a name="ModelServingConfigTrafficConfigRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

&modelserving.ModelServingConfigTrafficConfigRoutes {
	ServedModelName: *string,
	TrafficPercentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName">ServedModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#served_model_name ModelServing#served_model_name}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage">TrafficPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}. |

---

##### `ServedModelName`<sup>Required</sup> <a name="ServedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.servedModelName"></a>

```go
ServedModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#served_model_name ModelServing#served_model_name}.

---

##### `TrafficPercentage`<sup>Required</sup> <a name="TrafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutes.property.trafficPercentage"></a>

```go
TrafficPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#traffic_percentage ModelServing#traffic_percentage}.

---

### ModelServingTimeouts <a name="ModelServingTimeouts" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

&modelserving.ModelServingTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#create ModelServing#create}. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#update ModelServing#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#create ModelServing#create}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.14.3/docs/resources/model_serving#update ModelServing#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ModelServingConfigAOutputReference <a name="ModelServingConfigAOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.NewModelServingConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels">PutServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig">PutTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig">ResetTrafficConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServedModels` <a name="PutServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels"></a>

```go
func PutServedModels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putServedModels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTrafficConfig` <a name="PutTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig"></a>

```go
func PutTrafficConfig(value ModelServingConfigTrafficConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.putTrafficConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `ResetTrafficConfig` <a name="ResetTrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.resetTrafficConfig"></a>

```go
func ResetTrafficConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels">ServedModels</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig">TrafficConfig</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput">ServedModelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput">TrafficConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServedModels`<sup>Required</sup> <a name="ServedModels" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModels"></a>

```go
func ServedModels() ModelServingConfigServedModelsList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList">ModelServingConfigServedModelsList</a>

---

##### `TrafficConfig`<sup>Required</sup> <a name="TrafficConfig" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfig"></a>

```go
func TrafficConfig() ModelServingConfigTrafficConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference">ModelServingConfigTrafficConfigOutputReference</a>

---

##### `ServedModelsInput`<sup>Optional</sup> <a name="ServedModelsInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.servedModelsInput"></a>

```go
func ServedModelsInput() interface{}
```

- *Type:* interface{}

---

##### `TrafficConfigInput`<sup>Optional</sup> <a name="TrafficConfigInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.trafficConfigInput"></a>

```go
func TrafficConfigInput() ModelServingConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigA
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigA">ModelServingConfigA</a>

---


### ModelServingConfigServedModelsList <a name="ModelServingConfigServedModelsList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.NewModelServingConfigServedModelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ModelServingConfigServedModelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get"></a>

```go
func Get(index *f64) ModelServingConfigServedModelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingConfigServedModelsOutputReference <a name="ModelServingConfigServedModelsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.NewModelServingConfigServedModelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ModelServingConfigServedModelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled">ResetScaleToZeroEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetScaleToZeroEnabled` <a name="ResetScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.resetScaleToZeroEnabled"></a>

```go
func ResetScaleToZeroEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput">ModelVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput">ScaleToZeroEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput">WorkloadSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled">ScaleToZeroEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize">WorkloadSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `ModelVersionInput`<sup>Optional</sup> <a name="ModelVersionInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersionInput"></a>

```go
func ModelVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ScaleToZeroEnabledInput`<sup>Optional</sup> <a name="ScaleToZeroEnabledInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabledInput"></a>

```go
func ScaleToZeroEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WorkloadSizeInput`<sup>Optional</sup> <a name="WorkloadSizeInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSizeInput"></a>

```go
func WorkloadSizeInput() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.modelVersion"></a>

```go
func ModelVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ScaleToZeroEnabled`<sup>Required</sup> <a name="ScaleToZeroEnabled" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.scaleToZeroEnabled"></a>

```go
func ScaleToZeroEnabled() interface{}
```

- *Type:* interface{}

---

##### `WorkloadSize`<sup>Required</sup> <a name="WorkloadSize" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.workloadSize"></a>

```go
func WorkloadSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigServedModelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingConfigTrafficConfigOutputReference <a name="ModelServingConfigTrafficConfigOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.NewModelServingConfigTrafficConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingConfigTrafficConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes">PutRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes">ResetRoutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoutes` <a name="PutRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes"></a>

```go
func PutRoutes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.putRoutes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRoutes` <a name="ResetRoutes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.resetRoutes"></a>

```go
func ResetRoutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes">Routes</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput">RoutesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routes"></a>

```go
func Routes() ModelServingConfigTrafficConfigRoutesList
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList">ModelServingConfigTrafficConfigRoutesList</a>

---

##### `RoutesInput`<sup>Optional</sup> <a name="RoutesInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.routesInput"></a>

```go
func RoutesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ModelServingConfigTrafficConfig
```

- *Type:* <a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfig">ModelServingConfigTrafficConfig</a>

---


### ModelServingConfigTrafficConfigRoutesList <a name="ModelServingConfigTrafficConfigRoutesList" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.NewModelServingConfigTrafficConfigRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ModelServingConfigTrafficConfigRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get"></a>

```go
func Get(index *f64) ModelServingConfigTrafficConfigRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingConfigTrafficConfigRoutesOutputReference <a name="ModelServingConfigTrafficConfigRoutesOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.NewModelServingConfigTrafficConfigRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ModelServingConfigTrafficConfigRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput">ServedModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput">TrafficPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName">ServedModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage">TrafficPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServedModelNameInput`<sup>Optional</sup> <a name="ServedModelNameInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelNameInput"></a>

```go
func ServedModelNameInput() *string
```

- *Type:* *string

---

##### `TrafficPercentageInput`<sup>Optional</sup> <a name="TrafficPercentageInput" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentageInput"></a>

```go
func TrafficPercentageInput() *f64
```

- *Type:* *f64

---

##### `ServedModelName`<sup>Required</sup> <a name="ServedModelName" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.servedModelName"></a>

```go
func ServedModelName() *string
```

- *Type:* *string

---

##### `TrafficPercentage`<sup>Required</sup> <a name="TrafficPercentage" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.trafficPercentage"></a>

```go
func TrafficPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingConfigTrafficConfigRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ModelServingTimeoutsOutputReference <a name="ModelServingTimeoutsOutputReference" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v7/modelserving"

modelserving.NewModelServingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ModelServingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.modelServing.ModelServingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



